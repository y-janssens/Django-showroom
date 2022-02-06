from django.shortcuts import render, redirect, HttpResponse
from decorators import login_required, admin_required
from users.models import User, Profile
from .forms import DevisForm
from .models import Devi
import pdfkit
import os
from django.template.loader import render_to_string
import utils
from .utils import searchDevis

try:
    pdfkit_config = pdfkit.configuration(
        wkhtmltopdf=os.getenv('WKHTMLTOPDF_LOCATION')
    )
except OSError:
    pdfkit_config = {}


@login_required(login_url='login')
def devis(request):
    estimates, search_query = searchDevis(request)

    page_title = "Devis"
    context = {'page_title': page_title, 'estimates': estimates, 'search_query': search_query}
    return render(request, 'devis/devis.html', context)

@login_required(login_url='login')
def devis_save(request, pk):
    devis = Devi.objects.get(id=pk)
    page_title = f"Devis N° {devis.estimate_number}"
    
    html_content = render_to_string(
        'devis/devis_export.html', {'page_title': page_title, 'devis': devis})
    options = {'page-height': '235', 'page-width': '173'}
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
def devis_create(request):
    page_title = "Création de devis"
    profile = request.user.profile
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
            return redirect('devis')

    context = {'page_title': page_title, 'profile': profile, 'form': form}
    return render(request, 'devis/devis_form.html', context)

@login_required(login_url='login')
@admin_required(login_url='login')
def delete_devis(request, pk):
    devis = Devi.objects.get(id=pk)
    devis.delete()
    return redirect('devis')

@login_required(login_url='login')
def devis_client(request, pk):
    page_title = f"Devis N°{pk}"
    profile = request.user.profile
    devis = Devi.objects.get(id=pk)

    context = {'page_title': page_title, 'devis': devis, 'profile': profile}
    return render(request, 'devis/devis_display.html', context)
