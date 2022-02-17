from django.shortcuts import render
from decorators import login_required


@login_required(login_url='login')
def home(request):
    page_title = "Accueil"
    return render(request, 'index/home.html', {'page_title': page_title})

@login_required(login_url='login')
def cube(request):
    page_title = "Cube"
    return render(request, 'index/cube.html', {'page_title' : page_title})
