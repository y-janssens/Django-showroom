from django.shortcuts import render, redirect
from decorators import login_required, admin_required
from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.models import User
from django.contrib import messages
from users.models import Profile


@login_required(login_url='login')
@admin_required(login_url='login')
def admin_panel(request):
    users = User.objects.all()
    profiles = Profile.objects.all()
    group = zip(users, profiles)
    page_title = "Gestion des utilisateurs"
    context = {'users': users, 'page_title': page_title, 'group': group}
    return render(request, 'dashboard/admin.html', context)


def activate(request, pk):
    user = User.objects.get(id=pk)
    if user.is_superuser == False:
        if user.is_active == True:
            user.is_active = False
        else:
            user.is_active = True
    user.save()
    return redirect('admin')


def delete(request, pk):
    user = User.objects.get(id=pk)
    if user.is_superuser == False:
        user.delete()
    return redirect('admin')
