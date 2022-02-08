from django.db.models import Q
from .models import Client
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

def paginateClients(request, clients, results):
    page = request.GET.get('page')
    paginator = Paginator(clients, results)
    
    try:
        clients = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        clients = paginator.page(page)
    except EmptyPage:
        page = paginator.num_pages
        clients = paginator.page(page)

    leftIndex = (int(page) - 2)
    if leftIndex < 1:
        leftIndex = 1

    rightIndex = (int(page) + 3)
    if rightIndex >  paginator.num_pages:
        rightIndex = paginator.num_pages + 1

    custom_range = range(leftIndex, rightIndex)

    return custom_range, clients

def searchClients(request):
    search_query = ""

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    clients = Client.objects.distinct().filter(
        Q(first_name__icontains=search_query) | 
        Q(last_name__icontains=search_query)
        )

    return clients, search_query