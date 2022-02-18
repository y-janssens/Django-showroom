from django.db.models import Q
from .models import Message
from users.models import Profile
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

def paginateReceivedMessages(request, messages, results):
    page = request.GET.get('page')
    paginator = Paginator(messages, results)
    
    try:
        messages = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        messages = paginator.page(page)
    except EmptyPage:
        page = paginator.num_pages
        messages = paginator.page(page)

    leftIndex = (int(page) - 2)
    if leftIndex < 1:
        leftIndex = 1

    rightIndex = (int(page) + 3)
    if rightIndex >  paginator.num_pages:
        rightIndex = paginator.num_pages + 1

    custom_range = range(leftIndex, rightIndex)

    return custom_range, messages

def searchReceivedMessage(request):
    profile = request.user.profile
    search_query = ""

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    messages = profile.messages.distinct().filter(

        Q(subject__icontains=search_query) |
        Q(sender__first_name__icontains=search_query) |
        Q(sender__last_name__icontains=search_query)
        )

    return messages, search_query

def searchSentMessage(request):
    profile = request.user.profile
    search_query = ""

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    messages = profile.sent.distinct().filter(

        Q(subject__icontains=search_query) |
        Q(recipient__first_name__icontains=search_query) |
        Q(recipient__last_name__icontains=search_query)
        )

    return messages, search_query