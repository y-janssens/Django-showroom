from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.devis, name="devis"),
    path('<pk>', views.devis_client, name="devis_client"),
    path('create_devis', views.devis_create, name="devis_create"),
    path('delete_devis/<pk>', views.delete_devis, name="devis_delete"),
    path('save_devis/<pk>', views.devis_save, name="devis_save"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

