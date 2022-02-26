from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.admin_panel, name="admin"),
    path('confirm/<pk>', views.confirm_user, name="confirm_user"),
    path('logs', views.admin_logs, name="logs"),
    path('societe', views.company, name="societe"),
    path('activate/<str:pk>/', views.activate, name="activate"),
    path('delete/<str:pk>/', views.delete_user, name="delete_user"),
    path('profile/<pk>', views.user_profile_edit, name="user_profile_edit"),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)