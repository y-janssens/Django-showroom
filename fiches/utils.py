from django.db.models import Q
from .models import Fiche

def searchFiche(request):
    search_query = ""

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    fiches = Fiche.objects.distinct().filter(
        Q(first_name__icontains=search_query) | 
        Q(last_name__icontains=search_query) |
        Q(invoice_number__icontains=search_query) |
        Q(owner__first_name__icontains=search_query) |
        Q(owner__last_name__icontains=search_query)
        )

    return fiches, search_query