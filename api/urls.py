from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path('', views.getRoutes, name="api"),

    path('fiches/', views.getFiches, name="fiches"),
    path('fiches/<str:pk>', views.getFiche, name="fiche"),

    path('factures/', views.getFactures, name="factures"),
    path('factures/<str:pk>', views.getFacture, name="facture"),

    path('devis/', views.getDevis, name="devis"),
    path('devis/<str:pk>', views.getDevi, name="devi"),

    path('clients/', views.getClients, name="clients"),
    path('clients/<str:pk>', views.getClient, name="client"),

    path('societe/', views.getCompany, name="societe"),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)