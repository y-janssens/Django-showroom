from django.shortcuts import render, redirect
from decorators import login_required, admin_required
from .models import Fiche
from .forms import FicheForm
from users.models import User


@login_required(login_url='login')
def fiches(request):
    users = User.objects.all()
    fiches = Fiche.objects.all()
    page_title = "Fiches de chantier"
    context = {'page_title': page_title, 'users': users, 'fiches': fiches}
    return render(request, 'fiches/fiches.html', context)


@login_required(login_url='login')
def fiche_chantier(request, pk):
    page_title = f"Fiche de chantier N°{pk}"
    fiche = Fiche.objects.get(id=pk)
    context = {'page_title': page_title, 'fiche': fiche}
    return render(request, 'fiches/fiche_c.html', context)


@login_required(login_url='login')
def create_fiche_chantier(request):
    page_title = "Création de fiche"
    profile = request.user.profile
    form = FicheForm()

    if request.method == "POST":
        form = FicheForm(request.POST)
        if form.is_valid():
            fiche = form.save(commit=False)
            fiche.owner = profile
            form.save()
            return redirect('fiches')

    context = {'page_title': page_title, 'form': form}
    return render(request, 'fiches/fiche_n.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_fiche_chantier(request, pk):
    fiche = Fiche.objects.get(id=pk)
    fiche.delete()
    return redirect('fiches')
