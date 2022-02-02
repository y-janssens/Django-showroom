from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from decorators import login_required, admin_required
from users.models import User

@login_required(login_url='login')
def devis(request):
    users = User.objects.all()

    page_title = "Devis"
    context = {'page_title': page_title, 'users': users}
    return render(request, 'devis/devis.html', context)