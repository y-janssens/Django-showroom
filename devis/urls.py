from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.devis, name="devis"),
    path('confirm/<pk>', views.confirm_devis, name="confirm_devis"),
    path('devis/<pk>', views.devis_client, name="devis_client"),
    path('create_devis', views.devis_create, name="devis_create"),
    path('delete_devis/<pk>', views.delete_devis, name="devis_delete"),
    path('save_devis/<pk>', views.devis_save, name="devis_save"),
    path('print_devis/<pk>', views.devis_print, name="devis_print"),
    path('send_devis/<pk>', views.devis_send, name="devis_send"),
    path('convert_invoice/<pk>', views.convert_invoice, name="convert_invoice"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

