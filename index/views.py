from django.shortcuts import render, redirect
from decorators import login_required


@login_required(login_url='login')
def home(request):
    page_title = "Accueil"
    return render(request, 'index/home.html', {'page_title': page_title})
