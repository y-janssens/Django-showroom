from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.clients, name="clients"),
    path('create_client', views.create_client, name="create_client"),
    path('delete_client/<pk>', views.delete_client, name="delete_client"),
    path('edit_client/<pk>', views.edit_client, name="edit_client"),    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)