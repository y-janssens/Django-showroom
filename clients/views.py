from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required, admin_required
from .models import Client
from .forms import ClientForm

@login_required(login_url='login')
def clients(request):
    clients = Client.objects.all()

    page_title = "Fichier client"
    context = {'page_title': page_title, 'clients': clients}
    return render(request, 'clients/clients.html', context)

@login_required(login_url='login')
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

