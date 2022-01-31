from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.fiches, name="fiches"),
    path('fiches/<pk>', views.fiche_chantier, name="fiche_chantier"),
    path('delete_fiche/<pk>', views.delete_fiche_chantier, name="delete_fiche"),
    path('create_fiche', views.create_fiche_chantier, name="create_fiche"),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)