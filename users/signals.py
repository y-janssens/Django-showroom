from django.contrib.auth.models import User
from .models import Profile
from django.db.models.signals import post_save

def createProfile(sender, instance, created, **kwargs):
    if created:
        user = instance
        profile = Profile.objects.create(
            user = user,
            username = user.username,
            email = user.email,            
        )

def updateUser(sender, instance, created, **kwargs):
    profile = instance
    user = profile.user
    if created == False:
        user.first_name = profile.first_name
        user.last_name = profile.last_name
        user.username = profile.username
        user.email = profile.email
        user.save()

post_save.connect(createProfile, sender=User)
post_save.connect(updateUser, sender=Profile)