from django.db import models
from users.models import Profile
import uuid

SLANT = (
    ('Pente', 'Pente'),
    ('1.30','1.30'),
    ('1.45','1.45'),
    ('1.60','1.60'),
)

SOURCE = (
    ('Source', 'Source'),
    ('R1','R1'),
    ('CA','Ca'),
    ('Assistance','Assistance'),
)

class Fiche(models.Model):
    customer = models.CharField(max_length=200, null=False, blank=False)
    adress = models.CharField(max_length=200, null=False, blank=False)
    city = models.CharField(max_length=200, null=False, blank=False)
    post_code = models.CharField(max_length=5, null=False, blank=False)
    phone = models.CharField(max_length=10, null=False, blank=False)

    invoice_number = models.CharField(max_length=10, blank=True, null=True)
    commercial = models.CharField(max_length=100, null=False, blank=False)
    area = models.CharField(max_length=10, blank=True, null=True)
    roof = models.CharField(max_length=10, blank=True, null=True)
    height = models.CharField(max_length=10, blank=True, null=True)
    slant = models.CharField(max_length=20, choices=SLANT, default='Pente')
    source = models.CharField(max_length=20, choices=SOURCE, default='Source')
    created = models.DateTimeField(auto_now_add=True, null=True)
    
    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.SET_NULL)


    def __str__(self):
        return self.customer