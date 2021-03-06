from django.shortcuts import render, redirect, HttpResponse
from decorators import login_required, admin_required, role_required
from .models import Fiche, Profile
from .forms import FicheForm
from dashboard.models import Societe
from users.models import User
import pdfkit
import os
from django.template.loader import render_to_string
import utils
from .utils import searchFiche, paginateFiche


try:
    pdfkit_config = pdfkit.configuration(
        wkhtmltopdf=os.getenv('WKHTMLTOPDF_LOCATION')
    )
except OSError:
    pdfkit_config = {}


@login_required(login_url='login')
def save_fiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    page_title = f"Fiche de chantier {fiche.last_name}"
    name = fiche.last_name

    html_content = render_to_string(
        'fiches/fiche_export.html', {'page_title': page_title, 'fiche': fiche})
    options = {'page-height': '277', 'page-width': '225'}
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    response = HttpResponse(content_type="application/pdf;")
    response[
        "Content-Disposition"
    ] = f"attachment; filename=Fiche de chantier {name}.pdf"
    response["Content-Transfer-Encoding"] = "binary"
    response.write(pdf_content)
    return response


@login_required(login_url='login')
def send_fiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    profile = request.user.profile
    page_title = f"Fiche de chantier {fiche.last_name}"

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'fiches/fiche_export.html', {'page_title': page_title, 'fiche': fiche})
    options = {'page-height': '277', 'page-width': '225'}
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    utils.send_email_plaintext(
        from_header= f'webmaster@{company.name.lower()}.com',
        to=request.POST['receiver'],
        subject=page_title,
        message=request.POST['form_message'],
        attachments=[(f"{page_title}.pdf", pdf_content)],
    )
    return redirect('fiches')


@login_required(login_url='login')
def print_fiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    page_title = f"Fiche de chantier {fiche.last_name}"
    name = fiche.last_name

    html_content = render_to_string(
        'fiches/fiche_export.html', {'page_title': page_title, 'fiche': fiche})
    options = {'page-height': '277', 'page-width': '225'}
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    response = HttpResponse(content_type="application/pdf;")
    response[
        "Content-Disposition"
    ] = f"inline; filename=Fiche de chantier {name}.pdf"
    response["Content-Transfer-Encoding"] = "binary"
    response.write(pdf_content)
    return response


@login_required(login_url='login')
def fiches(request):
    profile = request.user.profile
    fiches, search_query = searchFiche(request)
    custom_range, fiches = paginateFiche(request, fiches, 40)

    page_title = "Fiches de chantier"
    context = {'page_title': page_title,  'fiches': fiches,
               'search_query': search_query, 'custom_range': custom_range, 'profile': profile}
    return render(request, 'fiches/fiches.html', context)


@login_required(login_url='login')
def fiche_chantier(request, pk):

    fiche = Fiche.objects.get(id=pk)
    users = User.objects.all()
    profiles = Profile.objects.all()
    name = fiche.last_name
    page_title = f"Fiche de chantier {fiche.last_name.capitalize()}"
    context = {'page_title': page_title, 'fiche': fiche,
               'name': name, 'users': users, 'profiles': profiles}
    return render(request, 'fiches/fiche_display.html', context)


@login_required(login_url='login')
@role_required(login_url='fiches')
def create_fiche_chantier(request):
    page_title = "Cr??ation de fiche"
    profile = request.user.profile
    form = FicheForm()

    if request.method == "POST":
        form = FicheForm(request.POST)
        if form.is_valid():
            fiche = form.save(commit=False)
            fiche.owner = profile
            form.save()
            return redirect(f'/fiches/fiche/{fiche.id}')        

    context = {'page_title': page_title, 'form': form}
    return render(request, 'fiches/fiche_form.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_fiche_chantier(request, pk):
    fiche = Fiche.objects.get(id=pk)
    fiche.delete()
    return redirect('fiches')

@login_required(login_url='login')
@admin_required(login_url='login')
def confirm_fiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    page_title = "Confirmation"
    sender = "fiche"
    context = {'page_title': page_title, 'fiche': fiche, 'sender': sender}
    return render(request, 'index/confirm.html', context) 