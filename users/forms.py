from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile
from .choices import *

class RegisterForm(UserCreationForm):
    username = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'placeholder': 'Nom d\'utilisateur'}))
    password1 = forms.CharField(max_length=50, widget=forms.PasswordInput(attrs={'placeholder': 'Mot de passe'}))
    password2 = None
    email = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'placeholder': 'Adresse e-mail'}))
    class Meta:
        model = User
        fields = ("username", "password1", "email")
        
    def __init__(self, *args, **kwags):
        
        super(RegisterForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'label'})



class ProfileForm(ModelForm):
    first_name = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'placeholder': 'Prénom'}))
    last_name = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'placeholder': 'Nom'}))
    phone = forms.CharField(max_length=10, widget=forms.TextInput(attrs={'placeholder': 'Téléphone'}))
    email = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'placeholder': 'E-mail'}))
    
    class Meta:
        model = Profile
        fields = ("first_name", "last_name", "phone", "email", "role")

    def __init__(self, *args, **kwags):
        super(ProfileForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})