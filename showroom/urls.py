from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('login/', views.loginUser, name="login"),
    path('register/', views.registerUser, name="register"),
    path('logout/', views.logoutUser, name="logout"),
    path('showroom/scene/1', views.scene_1, name="scene_1"),
    path('staff', views.admin_panel, name="admin"),
    path('activate/<str:pk>/', views.activate, name="activate"),
    path('delete/<str:pk>/', views.delete, name="delete"),
]
