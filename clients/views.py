from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required, admin_required, role_required
from .models import Client
from .forms import ClientForm
from .utils import paginateClients, searchClients


@login_required(login_url='login')
@role_required(login_url='login')
def clients(request):
    
    clients, search_query = searchClients(request)
    custom_range, clients = paginateClients(request, clients, 10) 

    page_title = "Fichier client"
    context = {'page_title': page_title, 'clients': clients, 'search_query': search_query, 'custom_range': custom_range}
    return render(request, 'clients/clients.html', context)

@login_required(login_url='login')
@role_required(login_url='login')
def create_client(request):

    form = ClientForm()
    if request.method == "POST":
        form = ClientForm(request.POST)
        if form.is_valid:
             form.save()
             return redirect('clients')
    
    page_title = "Nouveau client"
    context = {'page_title': page_title, 'form': form}
    return render(request, 'clients/client_form.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_client(request, pk):

    client = Client.objects.get(id=pk)
    client.delete()
    return redirect('clients')

@login_required(login_url='login')
@admin_required(login_url='login')
def edit_client(request, pk):

    client = Client.objects.get(id=pk)
    form = ClientForm(instance = client)
    if request.method == "POST":
        form = ClientForm(request.POST, instance = client)
        if form.is_valid:
             form.save()
             return redirect('clients')

    page_title = "Modification client"
    context = {'page_title': page_title, 'form': form}
    return render(request, 'clients/client_form.html', context)