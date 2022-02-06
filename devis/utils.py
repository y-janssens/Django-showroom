from django.db.models import Q
from .models import Devi
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

def paginateDevis(request, devis, results):
    page = request.GET.get('page')
    paginator = Paginator(devis, results)
    
    try:
        devis = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        devis = paginator.page(page)
    except EmptyPage:
        page = paginator.num_pages
        devis = paginator.page(page)

    leftIndex = (int(page) - 2)
    if leftIndex < 1:
        leftIndex = 1

    rightIndex = (int(page) + 3)
    if rightIndex >  paginator.num_pages:
        rightIndex = paginator.num_pages + 1

    custom_range = range(leftIndex, rightIndex)

    return custom_range, devis

def searchDevis(request):
    search_query = ""

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    devis = Devi.objects.distinct().filter(
        Q(customer__icontains=search_query) | 
        Q(estimate_number__icontains=search_query) |
        Q(owner__first_name__icontains=search_query) |
        Q(owner__last_name__icontains=search_query)
        )

    return devis, search_query