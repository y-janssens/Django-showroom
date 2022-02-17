from django.shortcuts import render, redirect
from decorators import login_required
from .models import Message
from .forms import MessageForm
from users.models import Profile


@login_required(login_url='login')
def inbox(request):
    profile = request.user.profile
    messageRequests = profile.messages.all()

    page_title = "Boite de réception"
    context = {'page_title': page_title,
               'messageRequests': messageRequests, 'profile': profile}
    return render(request, 'inbox/inbox.html', context)


@login_required(login_url='login')
def outbox(request):
    profile = request.user.profile
    messageRequests = profile.sent.all()

    page_title = "Messages envoyés"
    context = {'page_title': page_title,
               'messageRequests': messageRequests, 'profile': profile}
    return render(request, 'inbox/outbox.html', context)


def viewMessage(request, pk):
    profile = request.user.profile
    messageRequest = Message.objects.get(id=pk)

    page_title = "Lire le message"
    context = {'page_title': page_title,
               'messageRequest': messageRequest, 'profile': profile}
    return render(request, 'inbox/message.html', context)


def newMessage(request):
    profile = request.user.profile
    profiles = Profile.objects.all()
    form = MessageForm()

    if request.method == "POST":
        form = MessageForm(request.POST)
        if form.is_valid():
            fiche = form.save(commit=False)
            fiche.sender = profile
            form.save()
            return redirect('inbox')

    page_title = "Nouveau message"
    context = {'page_title': page_title,
               'form': form, 'profile': profile, 'profiles': profiles}
    return render(request, 'inbox/new_message.html', context)


def deleteMessage(request, pk):
    messageRequest = Message.objects.get(id=pk)
    messageRequest.delete()
    return redirect('inbox')
