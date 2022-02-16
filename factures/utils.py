from django.db.models import Q
from .models import Facture
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

def paginatefacture(request, facture, results):
    page = request.GET.get('page')
    paginator = Paginator(facture, results)
    
    try:
        facture = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        facture = paginator.page(page)
    except EmptyPage:
        page = paginator.num_pages
        facture = paginator.page(page)

    leftIndex = (int(page) - 2)
    if leftIndex < 1:
        leftIndex = 1

    rightIndex = (int(page) + 3)
    if rightIndex >  paginator.num_pages:
        rightIndex = paginator.num_pages + 1

    custom_range = range(leftIndex, rightIndex)

    return custom_range, facture

def searchfacture(request):
    search_query = ""

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    facture = Facture.objects.distinct().filter(
        Q(customer__icontains=search_query) | 
        Q(invoice_number__icontains=search_query) |
        Q(owner__first_name__icontains=search_query) |
        Q(owner__last_name__icontains=search_query)
        )

    return facture, search_query