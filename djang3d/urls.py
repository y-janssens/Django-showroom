from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', include('index.urls')),
    path('fiches/', include('fiches.urls')),
    path('users/', include('users.urls')),
    path('admin/', admin.site.urls, name='super-admin'),
    path('dashboard/', include('dashboard.urls')),
    path('devis/', include('devis.urls')),
    path('factures/', include('factures.urls')),
    path('clients/', include('clients.urls')),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
