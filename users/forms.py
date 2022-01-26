from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegisterForm(UserCreationForm):
    username = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'placeholder': 'Nom d\'utilisateur'}))
    password1 = forms.CharField(max_length=50, widget=forms.PasswordInput(attrs={'placeholder': '*********'}))
    password2 = None
    class Meta:
        model = User
        fields = ("username", "password1")
        
    def __init__(self, *args, **kwags):
        
        super(RegisterForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})



class ProfileForm(RegisterForm):
    class Meta:
        model = User
        fields = ("username", "password1", "first_name", "last_name", "email")

    def __init__(self, *args, **kwags):
        super(ProfileForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})