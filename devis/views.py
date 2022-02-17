from itertools import product
from django.shortcuts import render, redirect, HttpResponse
from decorators import login_required, admin_required, role_required
from users.models import User, Profile
from .forms import DevisForm
from factures.models import Facture
from .models import Devi
import pdfkit
import os
from django.template.loader import render_to_string
import utils
from .utils import searchDevis, paginateDevis
from dashboard.models import Societe

try:
    pdfkit_config = pdfkit.configuration(
        wkhtmltopdf=os.getenv('WKHTMLTOPDF_LOCATION')
    )
except OSError:
    pdfkit_config = {}


@login_required(login_url='login')
@role_required(login_url='login')
def devis(request):
    estimates, search_query = searchDevis(request)

    custom_range, estimates = paginateDevis(request, estimates, 40)

    page_title = "Devis"
    context = {'page_title': page_title, 'estimates': estimates,
               'search_query': search_query, 'custom_range': custom_range}
    return render(request, 'devis/devis.html', context)


@login_required(login_url='login')
@role_required(login_url='login')
def devis_save(request, pk):
    devis = Devi.objects.get(id=pk)
    page_title = f"Devis N° {devis.estimate_number}"

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'devis/devis_export.html', {'page_title': page_title, 'devis': devis, 'company': company})
    options = {'page-height': '255',
               'page-width': '187', 'encoding': "UTF-8", }
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    response = HttpResponse(content_type="application/pdf;")
    response[
        "Content-Disposition"
    ] = f"attachment; filename=Devis N° {devis.estimate_number}.pdf"
    response["Content-Transfer-Encoding"] = "binary"
    response.write(pdf_content)
    return response


@login_required(login_url='login')
@role_required(login_url='login')
def devis_send(request, pk):
    devis = Devi.objects.get(id=pk)
    page_title = f"Devis N° {devis.estimate_number}"
    profile = request.user.profile

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'devis/devis_export.html', {'page_title': page_title, 'devis': devis, 'company': company})
    options = {'page-height': '255',
               'page-width': '187', 'encoding': "UTF-8", }
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    utils.send_email_plaintext(
        from_header=f'webmaster@{company.name.lower()}.com',
        to=request.POST['receiver'],
        subject=page_title,
        message=request.POST['form_message'],
        attachments=[(f"{page_title}.pdf", pdf_content)],
    )
    return redirect('devis')


@login_required(login_url='login')
@role_required(login_url='login')
def devis_print(request, pk):
    devis = Devi.objects.get(id=pk)
    page_title = f"Devis N° {devis.estimate_number}"

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'devis/devis_export.html', {'page_title': page_title, 'devis': devis, 'company': company})
    options = {'page-height': '255',
               'page-width': '187', 'encoding': "UTF-8", }
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    response = HttpResponse(content_type="application/pdf;")
    response[
        "Content-Disposition"
    ] = f"inline; filename=Devis N° {devis.estimate_number}.pdf"
    response["Content-Transfer-Encoding"] = "binary"
    response.write(pdf_content)
    return response


@login_required(login_url='login')
@role_required(login_url='login')
def devis_create(request):
    page_title = "Création de devis"
    profile = request.user.profile

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    form = DevisForm()

    if request.method == "POST":
        form = DevisForm(request.POST)

        if form.is_valid():

            devis = form.save(commit=False)
            devis.owner = profile
            devis.validity = request.POST['devis_valid']

            devis.customer = request.POST['customer']
            devis.customer_adress = request.POST['customer_adress']
            devis.customer_city = request.POST['customer_city']
            devis.customer_post_code = request.POST['customer_post_code']
            devis.customer_phone = request.POST['customer_phone']

            devis.product_1 = request.POST['product_c']
            devis.quantity_1 = request.POST['quant_c']
            devis.unit_1 = request.POST['unit_c']
            devis.unit_price_1 = request.POST['unit_price_c']
            devis.vat_1 = request.POST['tva_margin_c']
            devis.total_vat_1 = request.POST['tva_total_c']
            devis.total_full_1 = request.POST['total_price_c']

            try:
                if request.POST['product_c2'] != None:
                    devis.product_2 = request.POST['product_c2']
                    devis.quantity_2 = request.POST['quant_c2']
                    devis.unit_2 = request.POST['unit_c2']
                    devis.unit_price_2 = request.POST['unit_price_c2']
                    devis.vat_2 = request.POST['tva_margin_c2']
                    devis.total_vat_2 = request.POST['tva_total_c2']
                    devis.total_full_2 = request.POST['total_price_c2']
            except:
                pass

            try:
                if request.POST['product_c3'] != None:
                    devis.product_3 = request.POST['product_c3']
                    devis.quantity_3 = request.POST['quant_c3']
                    devis.unit_3 = request.POST['unit_c3']
                    devis.unit_price_3 = request.POST['unit_price_c3']
                    devis.vat_3 = request.POST['tva_margin_c3']
                    devis.total_vat_3 = request.POST['tva_total_c3']
                    devis.total_full_3 = request.POST['total_price_c3']
            except:
                pass

            try:
                if request.POST['product_c4'] != None:
                    devis.product_4 = request.POST['product_c4']
                    devis.quantity_4 = request.POST['quant_c4']
                    devis.unit_4 = request.POST['unit_c4']
                    devis.unit_price_4 = request.POST['unit_price_c4']
                    devis.vat_4 = request.POST['tva_margin_c4']
                    devis.total_vat_4 = request.POST['tva_total_c4']
                    devis.total_full_4 = request.POST['total_price_c4']
            except:
                pass

            try:
                if request.POST['product_c5'] != None:
                    devis.product_5 = request.POST['product_c5']
                    devis.quantity_5 = request.POST['quant_c5']
                    devis.unit_5 = request.POST['unit_c5']
                    devis.unit_price_5 = request.POST['unit_price_c5']
                    devis.vat_5 = request.POST['tva_margin_c5']
                    devis.total_vat_5 = request.POST['tva_total_c5']
                    devis.total_full_5 = request.POST['total_price_c5']
            except:
                pass

            try:
                if request.POST['product_c6'] != None:
                    devis.product_6 = request.POST['product_c6']
                    devis.quantity_6 = request.POST['quant_c6']
                    devis.unit_6 = request.POST['unit_c6']
                    devis.unit_price_6 = request.POST['unit_price_c6']
                    devis.vat_6 = request.POST['tva_margin_c6']
                    devis.total_vat_6 = request.POST['tva_total_c6']
                    devis.total_full_6 = request.POST['total_price_c6']
            except:
                pass

            try:
                if request.POST['product_c7'] != None:
                    devis.product_7 = request.POST['product_c7']
                    devis.quantity_7 = request.POST['quant_c7']
                    devis.unit_7 = request.POST['unit_c7']
                    devis.unit_price_7 = request.POST['unit_price_c7']
                    devis.vat_7 = request.POST['tva_margin_c7']
                    devis.total_vat_7 = request.POST['tva_total_c7']
                    devis.total_full_7 = request.POST['total_price_c7']
            except:
                pass

            try:
                if request.POST['product_c8'] != None:
                    devis.product_8 = request.POST['product_c8']
                    devis.quantity_8 = request.POST['quant_c8']
                    devis.unit_8 = request.POST['unit_c8']
                    devis.unit_price_8 = request.POST['unit_price_c8']
                    devis.vat_8 = request.POST['tva_margin_c8']
                    devis.total_vat_8 = request.POST['tva_total_c8']
                    devis.total_full_8 = request.POST['total_price_c8']
            except:
                pass

            try:
                if request.POST['product_c9'] != None:
                    devis.product_9 = request.POST['product_c9']
                    devis.quantity_9 = request.POST['quant_c9']
                    devis.unit_9 = request.POST['unit_c9']
                    devis.unit_price_9 = request.POST['unit_price_c9']
                    devis.vat_9 = request.POST['tva_margin_c9']
                    devis.total_vat_9 = request.POST['tva_total_c9']
                    devis.total_full_9 = request.POST['total_price_c9']
            except:
                pass

            try:
                if request.POST['product_c10'] != None:
                    devis.product_10 = request.POST['product_c10']
                    devis.quantity_10 = request.POST['quant_c10']
                    devis.unit_10 = request.POST['unit_c10']
                    devis.unit_price_10 = request.POST['unit_price_c10']
                    devis.vat_10 = request.POST['tva_margin_c10']
                    devis.total_vat_10 = request.POST['tva_total_c10']
                    devis.total_full_10 = request.POST['total_price_c10']
            except:
                pass

            devis.total_ht = request.POST['total_ht_c']
            devis.total_vat = request.POST['total_tva_c']
            devis.total_full = request.POST['total_ttc_c']

            devis.save()
            return redirect(f'/devis/devis/{devis.id}')

    context = {'page_title': page_title, 'profile': profile,
               'form': form, 'company': company}
    return render(request, 'devis/devis_form.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_devis(request, pk):
    devis = Devi.objects.get(id=pk)
    devis.delete()
    return redirect('devis')


@login_required(login_url='login')
@role_required(login_url='login')
def devis_client(request, pk):

    users = User.objects.all()
    profiles = Profile.objects.all()

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    devis = Devi.objects.get(id=pk)
    page_title = f"Devis N°{devis.estimate_number}"
    context = {'page_title': page_title, 'devis': devis,
               'profiles': profiles, 'company': company, 'users': users}
    return render(request, 'devis/devis_display.html', context)


def convert_invoice(request, pk):
    devis = Devi.objects.get(id=pk)
    facture = Facture.objects.create(
        invoice_number=devis.estimate_number,
        owner=devis.owner,

        customer=devis.customer,
        customer_adress=devis.customer_adress,
        customer_city=devis.customer_city,
        customer_post_code=devis.customer_post_code,
        customer_phone=devis.customer_phone,

        product_1=devis.product_1,
        quantity_1=devis.quantity_1,
        unit_1=devis.unit_1,
        unit_price_1=devis.unit_price_1,
        vat_1=devis.vat_1,
        total_vat_1=devis.total_vat_1,
        total_full_1=devis.total_full_1,

        product_2=devis.product_2,
        quantity_2=devis.quantity_2,
        unit_2=devis.unit_2,
        unit_price_2=devis.unit_price_2,
        vat_2=devis.vat_2,
        total_vat_2=devis.total_vat_2,
        total_full_2=devis.total_full_2,

        product_3=devis.product_3,
        quantity_3=devis.quantity_3,
        unit_3=devis.unit_3,
        unit_price_3=devis.unit_price_3,
        vat_3=devis.vat_3,
        total_vat_3=devis.total_vat_3,
        total_full_3=devis.total_full_3,

        product_4=devis.product_4,
        quantity_4=devis.quantity_4,
        unit_4=devis.unit_4,
        unit_price_4=devis.unit_price_4,
        vat_4=devis.vat_4,
        total_vat_4=devis.total_vat_4,
        total_full_4=devis.total_full_4,

        product_5=devis.product_5,
        quantity_5=devis.quantity_5,
        unit_5=devis.unit_5,
        unit_price_5=devis.unit_price_5,
        vat_5=devis.vat_5,
        total_vat_5=devis.total_vat_5,
        total_full_5=devis.total_full_5,

        product_6=devis.product_6,
        quantity_6=devis.quantity_6,
        unit_6=devis.unit_6,
        unit_price_6=devis.unit_price_6,
        vat_6=devis.vat_6,
        total_vat_6=devis.total_vat_6,
        total_full_6=devis.total_full_6,

        product_7=devis.product_7,
        quantity_7=devis.quantity_7,
        unit_7=devis.unit_7,
        unit_price_7=devis.unit_price_7,
        vat_7=devis.vat_7,
        total_vat_7=devis.total_vat_7,
        total_full_7=devis.total_full_7,

        product_8=devis.product_8,
        quantity_8=devis.quantity_8,
        unit_8=devis.unit_8,
        unit_price_8=devis.unit_price_8,
        vat_8=devis.vat_8,
        total_vat_8=devis.total_vat_8,
        total_full_8=devis.total_full_8,

        product_9=devis.product_9,
        quantity_9=devis.quantity_9,
        unit_9=devis.unit_9,
        unit_price_9=devis.unit_price_9,
        vat_9=devis.vat_9,
        total_vat_9=devis.total_vat_9,
        total_full_9=devis.total_full_9,

        product_10=devis.product_10,
        quantity_10=devis.quantity_10,
        unit_10=devis.unit_10,
        unit_price_10=devis.unit_price_10,
        vat_10=devis.vat_10,
        total_vat_10=devis.total_vat_10,
        total_full_10=devis.total_full_10,

        total_ht=devis.total_ht,
        total_vat=devis.total_vat,
        total_full=devis.total_full
    )

    return redirect(f'/factures/facture/{facture.id}')
