from django import forms
from django.forms import ModelForm
from .models import Societe

class CompanyForm(ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Nom de la société'}))
    adress = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Adresse'}))
    post_code = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Code Postal'}))
    city = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Ville'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'N° de téléphone'}))
    siret = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'N° de Siret'}))
    owner = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Nom du gérant'}))
    co_owner = forms.CharField(required=False, widget=forms.TextInput(attrs={'placeholder': 'Nom du co-gérant'}))

    class Meta:
        model = Societe
        fields = '__all__'

    def __init__(self, *args, **kwags):
        
        super(CompanyForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})