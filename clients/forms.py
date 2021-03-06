from django import forms
from django.forms import ModelForm
from .models import Client

class ClientForm(ModelForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Prénom'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Nom'}))
    adress = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Adresse'}))
    post_code = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Code Postal'}))
    city = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Ville'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'N° de téléphone'}))
    email = forms.CharField(required=False, widget=forms.TextInput(attrs={'placeholder': 'Adresse e-mail'}))
    birth_date = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Date de naissance'}))

    class Meta:
        model = Client
        fields = '__all__'

    def __init__(self, *args, **kwags):
        
        super(ClientForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})