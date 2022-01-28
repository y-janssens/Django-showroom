from django.shortcuts import render, redirect
from decorators import login_required, admin_required
from .models import Fiche
from users.models import User
from showroom.models import Fiche


""" @login_required(login_url='login')
def index(request):
    page_title = "Showroom"
    return render(request, 'index.html', {'page_title': page_title}) """

@login_required(login_url='login')
def home(request):
    page_title = "Showroom"
    return render(request, 'showroom/home.html', {'page_title': page_title})


@login_required(login_url='login')
def scene_1(request):
    page_title = "Visualisation"
    return render(request, 'showroom/scene_1.html', {'page_title': page_title})

@login_required(login_url='login')
def fiches(request):
    users = User.objects.all()
    fiches = Fiche.objects.all()
    page_title = "Fiches de chantier"
    context = {'page_title': page_title, 'users': users, 'fiches': fiches}
    return render(request, 'showroom/fiches.html', context)

@login_required(login_url='login')
def fiche_chantier(request, pk):
    page_title = f"Fiche de chantier N°{pk}"
    fiche = Fiche.objects.get(id=pk)
    context = {'page_title': page_title, 'fiche': fiche}
    return render(request, 'showroom/fiche_c.html', context)

@login_required(login_url='login')
def create_fiche_chantier(request):
    page_title = "Création de fiche"
    context = {'page_title': page_title}
    return render(request, 'showroom/fiche_n.html', context)

@login_required(login_url='login')
@admin_required(login_url='login')
def delete_fiche_chantier(request, pk):
    fiche = Fiche.objects.get(id=pk)
    fiche.delete()
    return redirect('fiches')

