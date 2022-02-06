from django.db.models import Q
from .models import Devi

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