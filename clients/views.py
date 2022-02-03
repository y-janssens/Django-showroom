from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required, admin_required
from .models import Client

@login_required(login_url='login')
def clients(request):
    clients = Client.objects.all()

    page_title = "Devis"
    context = {'page_title': page_title, 'clients': clients}
    return render(request, 'clients/clients.html', context)