from django.shortcuts import render, redirect, HttpResponse
from decorators import login_required, admin_required, role_required
from users.models import User, Profile
from .forms import FactureForm
from .models import Facture
import pdfkit
import os
from django.template.loader import render_to_string
import utils
from .utils import searchfacture, paginatefacture
from dashboard.models import Societe

try:
    pdfkit_config = pdfkit.configuration(
        wkhtmltopdf=os.getenv('WKHTMLTOPDF_LOCATION')
    )
except OSError:
    pdfkit_config = {}


@login_required(login_url='login')
@role_required(login_url='login')
def factures(request):
    invoices, search_query = searchfacture(request)

    custom_range, invoices = paginatefacture(request, invoices, 40)

    page_title = "Factures"
    context = {'page_title': page_title, 'invoices': invoices,
               'search_query': search_query, 'custom_range': custom_range}
    return render(request, 'factures/factures.html', context)


@login_required(login_url='login')
@role_required(login_url='login')
def facture_save(request, pk):
    facture = Facture.objects.get(id=pk)
    page_title = f"Facture N° {facture.invoice_number}"

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'factures/facture_export.html', {'page_title': page_title, 'facture': facture, 'company': company})
    options = {'page-height': '255',
               'page-width': '187', 'encoding': "UTF-8", }
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    response = HttpResponse(content_type="application/pdf;")
    response[
        "Content-Disposition"
    ] = f"attachment; filename=Facture N° {facture.invoice_number}.pdf"
    response["Content-Transfer-Encoding"] = "binary"
    response.write(pdf_content)
    return response

@login_required(login_url='login')
@role_required(login_url='login')
def facture_send(request, pk):
    facture = Facture.objects.get(id=pk)
    page_title = f"Facture N° {facture.invoice_number}"
    profile = request.user.profile

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'factures/facture_export.html', {'page_title': page_title, 'facture': facture, 'company': company})
    options = {'page-height': '255', 'page-width': '187', 'encoding': "UTF-8",}
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    utils.send_email_plaintext(
        from_header= f'webmaster@{company.name.lower()}.com',
        to = request.POST['receiver'],
        subject = page_title,
        message = request.POST['form_message'],
        attachments=[(f"{page_title}.pdf", pdf_content)],
    )
    return redirect('factures')


@login_required(login_url='login')
@role_required(login_url='login')
def facture_print(request, pk):
    facture = Facture.objects.get(id=pk)
    page_title = f"Facture N° {facture.invoice_number}"

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    html_content = render_to_string(
        'factures/facture_export.html', {'page_title': page_title, 'facture': facture, 'company': company})
    options = {'page-height': '255',
               'page-width': '187', 'encoding': "UTF-8", }
    pdf_content = pdfkit.from_string(
        html_content, False, configuration=pdfkit_config, options=options)
    response = HttpResponse(content_type="application/pdf;")
    response[
        "Content-Disposition"
    ] = f"inline; filename=Facture N° {facture.invoice_number}.pdf"
    response["Content-Transfer-Encoding"] = "binary"
    response.write(pdf_content)
    return response


@login_required(login_url='login')
@role_required(login_url='login')
def facture_create(request):
    page_title = "Édition de facture"
    profile = request.user.profile

    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    form = FactureForm()

    if request.method == "POST":
        form = FactureForm(request.POST)

        if form.is_valid():

            facture = form.save(commit=False)
            facture.owner = profile

            facture.customer = request.POST['customer']
            facture.customer_adress = request.POST['customer_adress']
            facture.customer_city = request.POST['customer_city']
            facture.customer_post_code = request.POST['customer_post_code']
            facture.customer_phone = request.POST['customer_phone']

            facture.product_1 = request.POST['product_c']
            facture.quantity_1 = request.POST['quant_c']
            facture.unit_1 = request.POST['unit_c']
            facture.unit_price_1 = request.POST['unit_price_c']
            facture.vat_1 = request.POST['tva_margin_c']
            facture.total_vat_1 = request.POST['tva_total_c']
            facture.total_full_1 = request.POST['total_price_c']

            try:
                if request.POST['product_c2'] != None:
                    facture.product_2 = request.POST['product_c2']
                    facture.quantity_2 = request.POST['quant_c2']
                    facture.unit_2 = request.POST['unit_c2']
                    facture.unit_price_2 = request.POST['unit_price_c2']
                    facture.vat_2 = request.POST['tva_margin_c2']
                    facture.total_vat_2 = request.POST['tva_total_c2']
                    facture.total_full_2 = request.POST['total_price_c2']
            except:
                pass

            try:
                if request.POST['product_c3'] != None:
                    facture.product_3 = request.POST['product_c3']
                    facture.quantity_3 = request.POST['quant_c3']
                    facture.unit_3 = request.POST['unit_c3']
                    facture.unit_price_3 = request.POST['unit_price_c3']
                    facture.vat_3 = request.POST['tva_margin_c3']
                    facture.total_vat_3 = request.POST['tva_total_c3']
                    facture.total_full_3 = request.POST['total_price_c3']
            except:
                pass

            try:
                if request.POST['product_c4'] != None:
                    facture.product_4 = request.POST['product_c4']
                    facture.quantity_4 = request.POST['quant_c4']
                    facture.unit_4 = request.POST['unit_c4']
                    facture.unit_price_4 = request.POST['unit_price_c4']
                    facture.vat_4 = request.POST['tva_margin_c4']
                    facture.total_vat_4 = request.POST['tva_total_c4']
                    facture.total_full_4 = request.POST['total_price_c4']
            except:
                pass

            try:
                if request.POST['product_c5'] != None:
                    facture.product_5 = request.POST['product_c5']
                    facture.quantity_5 = request.POST['quant_c5']
                    facture.unit_5 = request.POST['unit_c5']
                    facture.unit_price_5 = request.POST['unit_price_c5']
                    facture.vat_5 = request.POST['tva_margin_c5']
                    facture.total_vat_5 = request.POST['tva_total_c5']
                    facture.total_full_5 = request.POST['total_price_c5']
            except:
                pass

            try:
                if request.POST['product_c6'] != None:
                    facture.product_6 = request.POST['product_c6']
                    facture.quantity_6 = request.POST['quant_c6']
                    facture.unit_6 = request.POST['unit_c6']
                    facture.unit_price_6 = request.POST['unit_price_c6']
                    facture.vat_6 = request.POST['tva_margin_c6']
                    facture.total_vat_6 = request.POST['tva_total_c6']
                    facture.total_full_6 = request.POST['total_price_c6']
            except:
                pass

            try:
                if request.POST['product_c7'] != None:
                    facture.product_7 = request.POST['product_c7']
                    facture.quantity_7 = request.POST['quant_c7']
                    facture.unit_7 = request.POST['unit_c7']
                    facture.unit_price_7 = request.POST['unit_price_c7']
                    facture.vat_7 = request.POST['tva_margin_c7']
                    facture.total_vat_7 = request.POST['tva_total_c7']
                    facture.total_full_7 = request.POST['total_price_c7']
            except:
                pass

            try:
                if request.POST['product_c8'] != None:
                    facture.product_8 = request.POST['product_c8']
                    facture.quantity_8 = request.POST['quant_c8']
                    facture.unit_8 = request.POST['unit_c8']
                    facture.unit_price_8 = request.POST['unit_price_c8']
                    facture.vat_8 = request.POST['tva_margin_c8']
                    facture.total_vat_8 = request.POST['tva_total_c8']
                    facture.total_full_8 = request.POST['total_price_c8']
            except:
                pass

            try:
                if request.POST['product_c9'] != None:
                    facture.product_9 = request.POST['product_c9']
                    facture.quantity_9 = request.POST['quant_c9']
                    facture.unit_9 = request.POST['unit_c9']
                    facture.unit_price_9 = request.POST['unit_price_c9']
                    facture.vat_9 = request.POST['tva_margin_c9']
                    facture.total_vat_9 = request.POST['tva_total_c9']
                    facture.total_full_9 = request.POST['total_price_c9']
            except:
                pass

            try:
                if request.POST['product_c10'] != None:
                    facture.product_10 = request.POST['product_c10']
                    facture.quantity_10 = request.POST['quant_c10']
                    facture.unit_10 = request.POST['unit_c10']
                    facture.unit_price_10 = request.POST['unit_price_c10']
                    facture.vat_10 = request.POST['tva_margin_c10']
                    facture.total_vat_10 = request.POST['tva_total_c10']
                    facture.total_full_10 = request.POST['total_price_c10']
            except:
                pass

            facture.total_ht = request.POST['total_ht_c']
            facture.total_vat = request.POST['total_tva_c']
            facture.total_full = request.POST['total_ttc_c']

            facture.save()
            return redirect('factures')

    context = {'page_title': page_title, 'profile': profile,
               'form': form, 'company': company}
    return render(request, 'factures/facture_form.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_facture(request, pk):
    facture = Facture.objects.get(id=pk)
    facture.delete()
    return redirect('factures')


@login_required(login_url='login')
@role_required(login_url='login')
def facture_client(request, pk):

    users = User.objects.all()
    profiles = Profile.objects.all()
    company = Societe.objects.get(pk=1)
    facture = Facture.objects.get(id=pk)
    page_title = f"Facture N°{facture.invoice_number}"
    context = {'page_title': page_title, 'facture': facture,
               'profiles': profiles, 'company': company, 'users': users}
    return render(request, 'factures/facture_display.html', context)
