from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required


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
