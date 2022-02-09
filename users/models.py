from django.db import models
from django.contrib.auth.models import User
from .choices import *


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    username = models.CharField(max_length=200, blank=True, null=True)
    first_name = models.CharField(max_length=200, blank=True, null=True)
    last_name = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=10, blank=True, null=True)
    email = models.EmailField(max_length=500, blank=True, null=True)
    role = models.CharField(max_length=20, choices=ROLES, default='Rôle', blank=True, null=True)
    

    def __str__(self):
        return str(self.username)
