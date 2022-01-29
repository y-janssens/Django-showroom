from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from .forms import RegisterForm, ProfileForm


def registerUser(request):
    page_title = "Création de compte"

    form = RegisterForm(request.POST)
    if form.is_valid():
        form.save()
        user = form.save()
        if user.is_active == True:
            user.is_active = False
        user.save()
        messages.success(
            request, 'Compte crée avec succès, en attente de validation par un administrateur!')
        return redirect('login')

    context = {'page_title': page_title, 'form': form}
    return render(request, 'users/register.html', context)


def loginUser(request):
    page_title = "Login"
    if request.user.is_authenticated:
        return redirect('/')

    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'Le nom d\'utilisateur n\'existe pas')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, f'Bienvenue {username}!')
            if user.is_superuser:
                return redirect('admin')
            else:
                return redirect('fiches')

        else:
            messages.error(
                request, 'Le nom d\'utilisateur et/ou le mot de passe sont incorrects')
    return render(request, 'users/login.html', {'page_title': page_title})


def logoutUser(request):
    if request.user.is_authenticated:
        username = request.user.username
    logout(request)
    messages.info(request, f'À bientôt {username}!')
    return redirect('login')


@login_required
def profile(request, pk):
    profile = request.user.profile
    user = User.objects.get(id=pk)
    form = ProfileForm(instance=profile)

    if request.method == "POST":
        form = ProfileForm(request.POST, instance=profile)
        if form.is_valid:
            form.save()
            return redirect('home')

    page_title = "Profil"
    context = {'page_title': page_title, 'form': form, 'user': user}
    return render(request, 'users/profile.html', context)
