from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.loginUser, name="login"),
    path('register', views.registerUser, name="register"),
    path('logout', views.logoutUser, name="logout"),
    path('profile/u<pk>', views.profile, name="profile"),
    path('edit_profile/user<pk>', views.editProfile, name="edit_profile"),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
