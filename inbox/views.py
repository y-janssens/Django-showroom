from django.shortcuts import render, redirect
from decorators import login_required
from .models import Message
from .forms import MessageForm
from users.models import Profile
from .utils import searchReceivedMessage, searchSentMessage, paginateReceivedMessages


@login_required(login_url='login')
def inbox(request):
    profile = request.user.profile
    messageRequests, search_query = searchReceivedMessage(request)
    custom_range, messageRequests = paginateReceivedMessages(request, messageRequests, 15)
    messageCount = profile.messages.distinct().count()
    unreadCount = profile.messages.filter(is_read=False).count()

    page_title = "Boite de réception"
    context = {'page_title': page_title,
               'messageRequests': messageRequests, 'profile': profile, 'search_query': search_query, 'custom_range': custom_range, 'messageCount': messageCount, 'unreadCount': unreadCount}
    return render(request, 'inbox/inbox.html', context)


@login_required(login_url='login')
def outbox(request):
    profile = request.user.profile    
    messageRequests, search_query = searchSentMessage(request)
    custom_range, messageRequests = paginateReceivedMessages(request, messageRequests, 15)
    messageCount = profile.sent.distinct().count()

    page_title = "Messages envoyés"
    context = {'page_title': page_title,
               'messageRequests': messageRequests, 'profile': profile, 'search_query': search_query, 'custom_range': custom_range, 'messageCount': messageCount}
    return render(request, 'inbox/outbox.html', context)


def viewMessage(request, pk):
    profile = request.user.profile
    message = Message.objects.get(id=pk)
    if message.is_read == False:
        message.is_read = True
        message.save()

    page_title = "Lire le message"
    context = {'page_title': page_title,
               'message': message, 'profile': profile}
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
    message = Message.objects.get(id=pk)
    message.delete()
    return redirect('inbox')
