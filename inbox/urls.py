from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.inbox, name="inbox"),
    path('confirm/<pk>', views.confirm_message, name="confirm_message"),
    path('outbox/', views.outbox, name="outbox"),
    path('message/<pk>', views.viewMessage, name="view_message"),
    path('new_message/', views.newMessage, name="new_message"),
    path('delete_message/<pk>', views.deleteMessage, name="delete_message"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)