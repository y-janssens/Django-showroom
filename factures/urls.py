from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.factures, name="factures"),
    path('confirm/<pk>', views.confirm_facture, name="confirm_facture"),
    path('facture/<pk>', views.facture_client, name="facture_client"),
    path('create_facture', views.facture_create, name="facture_create"),
    path('delete_facture/<pk>', views.delete_facture, name="facture_delete"),
    path('save_facture/<pk>', views.facture_save, name="facture_save"),
    path('print_facture/<pk>', views.facture_print, name="facture_print"),
    path('send_facture/<pk>', views.facture_send, name="facture_send"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
