from django import forms
from django.forms import ModelForm
from .models import Devi

class DevisForm(ModelForm):
    class Meta:
        model = Devi
        fields = '__all__'

    def __init__(self, *args, **kwags):
        
        super(DevisForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'devis_input'})