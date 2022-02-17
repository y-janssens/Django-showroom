from django import forms
from django.forms import ModelForm
from .models import Message

class MessageForm(ModelForm):
    class Meta:
        model = Message
        fields = '__all__'

    def __init__(self, *args, **kwags):
        
        super(MessageForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'form_fiche_input'})