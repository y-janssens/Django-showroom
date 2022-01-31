from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.loginUser, name="login"),
    path('register', views.registerUser, name="register"),
    path('logout', views.logoutUser, name="logout"),
    path('profile', views.profile, name="profile"),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
