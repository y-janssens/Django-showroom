from django.forms import ModelForm
from .models import Facture

class FactureForm(ModelForm):
    class Meta:
        model = Facture
        fields = '__all__'

    def __init__(self, *args, **kwags):
        
        super(FactureForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'devis_input'})