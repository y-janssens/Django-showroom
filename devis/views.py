from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required, admin_required
from users.models import User, Profile
from .models import Devi


@login_required(login_url='login')
def devis(request):
    users = User.objects.all()
    estimates = Devi.objects.all()

    page_title = "Devis"
    context = {'page_title': page_title, 'users': users, 'estimates': estimates}
    return render(request, 'devis/devis.html', context)


@login_required(login_url='login')
def devis_create(request):
    page_title = "Création de devis"
    profile = request.user.profile

    context = {'page_title': page_title, 'devis': devis, 'profile': profile}
    return render(request, 'devis/devis_form.html', context)

@login_required(login_url='login')
def devis_client(request, pk):
    page_title = f"Devis N°{pk}"
    profile = request.user.profile
    devis = Devi.objects.get(id=pk)

    context = {'page_title': page_title, 'devis': devis, 'profile': profile}
    return render(request, 'devis/devis_display.html', context)
