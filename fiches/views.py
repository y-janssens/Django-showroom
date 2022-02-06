from django.shortcuts import render, redirect, HttpResponse
from decorators import login_required, admin_required
from .models import Fiche, Profile
from .forms import FicheForm
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
    try:
        html_content = render_to_string(
            'fiches/fiche_export.html', {'page_title': page_title, 'fiche': fiche})
        options = {'page-height': '223', 'page-width': '277'}
        pdf_content = pdfkit.from_string(
            html_content, False, configuration=pdfkit_config, options=options)
        response = HttpResponse(content_type="application/pdf;")
        response[
            "Content-Disposition"
        ] = f"attachment; filename=Fiche de chantier {name}.pdf"
        response["Content-Transfer-Encoding"] = "binary"
        response.write(pdf_content)
        return response
    except:
        return HttpResponse(status=204)


@login_required(login_url='login')
def send_fiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    profile = request.user.profile
    page_title = f"Fiche de chantier {fiche.last_name}"
    
    html_content = render_to_string(
        'fiches/fiche_export.html', {'page_title': page_title, 'fiche': fiche})
    options = {'page-height': '223', 'page-width': '277'}
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    utils.send_email_plaintext(
        from_header = profile.email,
        to = request.POST['receiver'],
        subject = page_title,
        message = request.POST['form_message'],
        attachments=[(f"{page_title}.pdf", pdf_content)],
    )
    return redirect('fiches')
        


@login_required(login_url='login')
def print_fiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    page_title = f"Fiche de chantier {fiche.last_name}"
    name = fiche.last_name
    try:
        html_content = render_to_string(
            'fiches/fiche_export.html', {'page_title': page_title, 'fiche': fiche})
        options = {'page-height': '223', 'page-width': '277'}
        pdf_content = pdfkit.from_string(
            html_content, False, configuration=pdfkit_config, options=options)
        response = HttpResponse(content_type="application/pdf;")
        response[
            "Content-Disposition"
        ] = f"inline; filename=Fiche de chantier {name}.pdf"
        response["Content-Transfer-Encoding"] = "binary"
        response.write(pdf_content)
        return response
    except:
        return HttpResponse(status=204)


@login_required(login_url='login')
def fiches(request):
    fiches, search_query = searchFiche(request)
    custom_range, fiches = paginateFiche(request, fiches, 40)    

    page_title = "Fiches de chantier"
    context = {'page_title': page_title,  'fiches': fiches, 'search_query': search_query, 'custom_range': custom_range}
    return render(request, 'fiches/fiches.html', context)


@login_required(login_url='login')
def fiche_chantier(request, pk):
    page_title = f"Fiche de chantier N°{pk}"
    fiche = Fiche.objects.get(id=pk)
    users = User.objects.all()
    profiles = Profile.objects.all()
    name = fiche.last_name    

    context = {'page_title': page_title, 'fiche': fiche,
               'name': name, 'users': users, 'profiles': profiles}
    return render(request, 'fiches/fiche_display.html', context)


@login_required(login_url='login')
def create_fiche_chantier(request):
    page_title = "Création de fiche"
    profile = request.user.profile
    form = FicheForm()

    if request.method == "POST":
        form = FicheForm(request.POST)
        if form.is_valid():
            fiche = form.save(commit=False)
            fiche.owner = profile
            form.save()
            return redirect('fiches')

    context = {'page_title': page_title, 'form': form}
    return render(request, 'fiches/fiche_form.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_fiche_chantier(request, pk):
    fiche = Fiche.objects.get(id=pk)
    fiche.delete()
    return redirect('fiches')
