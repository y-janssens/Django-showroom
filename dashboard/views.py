from django.shortcuts import render, redirect
from decorators import login_required, admin_required
from django.contrib.auth.models import User
from django.contrib.admin.models import LogEntry
from users.models import Profile
from fiches.models import Fiche
from users.forms import ProfileForm
from .forms import CompanyForm
from .models import Societe


@login_required(login_url='login')
@admin_required(login_url='login')
def admin_panel(request):
    global forms
    users = User.objects.all()
    profiles = Profile.objects.all()
    forms = ProfileForm()
    group = zip(users, profiles)
    page_title = "Gestion des utilisateurs"
    context = {'users': users, 'page_title': page_title,
               'group': group, 'forms': forms}

    return render(request, 'dashboard/admin.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def admin_logs(request):
    page_title = "Historique d'utilisation"
    users = User.objects.all()
    fiche = User.objects.all()
    logs = LogEntry.objects.all().order_by('-action_time')[0:30]
    context = {'page_title': page_title,
               'logs': logs, 'users': users, 'fiche': fiche}
    return render(request, 'dashboard/logs.html', context)

@login_required(login_url='login')
@admin_required(login_url='login')
def company(request):
   
    if Societe.objects.filter(pk=1).exists():
        company = Societe.objects.get(pk=1)
    else:
        company = None

    form = CompanyForm(instance=company)    

    if request.method == "POST":
        form = CompanyForm(request.POST, instance=company)
        if form.is_valid:
            form.save()
            return redirect('admin')

    page_title = "Société"
    context = {'page_title': page_title, 'form': form, 'company': company}
    return render(request, 'dashboard/company.html', context)


@login_required(login_url='login')
@admin_required(login_url='login')
def activate(request, pk):
    user = User.objects.get(id=pk)
    if user.is_superuser == False:
        if user.is_active == True:
            user.is_active = False
        else:
            user.is_active = True
    user.save()
    return redirect('admin')


@login_required(login_url='login')
@admin_required(login_url='login')
def delete_user(request, pk):
    user = User.objects.get(id=pk)
    if user.is_superuser == False:
        user.delete()
    return redirect('admin')

@login_required(login_url='login')
@admin_required(login_url='login')
def confirm_user(request, pk):
    user = User.objects.get(id=pk)
    page_title = "Confirmation"
    sender = "user"
    context = {'page_title': page_title, 'user': user, 'sender': sender}
    if user.is_superuser == False:
        return render(request, 'index/confirm.html', context) 
    else:
        return redirect('admin')

def user_profile_edit(request, pk):
    profile = Profile.objects.get(id=pk)
    form = ProfileForm(instance=profile)

    if request.method == "POST":
        form = ProfileForm(request.POST, instance=profile)
        if form.is_valid:
            form.save()
            return redirect('admin')

    page_title = f"Profil {profile.first_name} {profile.last_name}"
    context = {'page_title': page_title, 'form': form, 'profile': profile}
    return render(request, 'dashboard/admin_profile.html', context)
