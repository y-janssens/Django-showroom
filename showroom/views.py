from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse

from django.contrib.auth.models import User
from django.contrib import messages
from .forms import RegisterForm


@login_required(login_url='login')
def index(request):
    page_title = "Showroom"
    return render(request, 'showroom/index.html', {'page_title': page_title})


def deactivate(request):
    user = request.user
    if user.is_active == True:
        user.is_active = False
    user.save()


def registerUser(request):
    page_title = "Création de compte"

    form = RegisterForm(request.POST)
    if form.is_valid():
        form.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(request, user)
        deactivate(request)
        logout(request)
        messages.success(
            request, 'Compte crée avec succès, en attente de validation par un administrateur!')
        return redirect('login')

    context = {'page_title': page_title, 'form': form}
    return render(request, 'showroom/register.html', context)


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
            return redirect('/')

        else:
            messages.error(
                request, 'Le nom d\'utilisateur et/ou le mot de passe sont incorrects')
    return render(request, 'showroom/login.html', {'page_title': page_title})


@login_required(login_url='login')
def home(request):
    page_title = "Showroom"
    return render(request, 'showroom/home.html', {'page_title': page_title})


def logoutUser(request):
    if request.user.is_authenticated:
        username = request.user.username
    logout(request)
    messages.info(request, f'À bientôt {username}!')
    return redirect('login')


@login_required(login_url='login')
def scene_1(request):
    page_title = "Visualisation"
    return render(request, 'showroom/scene_1.html', {'page_title': page_title})
