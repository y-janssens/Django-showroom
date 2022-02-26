from django.db import models
from users.models import Profile
from .choices import *

class Fiche(models.Model):
    first_name = models.CharField(max_length=200, null=False, blank=False)
    last_name = models.CharField(max_length=200, null=False, blank=False)
    adress = models.CharField(max_length=200, null=False, blank=False)
    city = models.CharField(max_length=200, null=False, blank=False)
    post_code = models.CharField(max_length=5, null=False, blank=False)
    phone = models.CharField(max_length=10, null=False, blank=False)
    invoice_number = models.CharField(max_length=10, blank=True, null=True)
    area = models.CharField(max_length=10, blank=True, null=True)
    roof = models.CharField(max_length=10, blank=True, null=True)
    height = models.CharField(max_length=10, blank=True, null=True)
    slant = models.CharField(max_length=20, choices=SLANT, null=False, blank=False)
    source = models.CharField(max_length=20, choices=SOURCE, null=False, blank=False)

    charpente_access = models.CharField(max_length=50, choices=ACCESS, blank=True, null=False)
    charpente_area = models.CharField(max_length=50, blank=True, null=False)
    charpente_height = models.CharField(max_length=50, blank=True, null=False)
    charpente_job = models.CharField(max_length=50, choices=CHARPENTE, blank=True, null=False)
    charpente_mess = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)
    charpente_floor = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    soufflage_access = models.CharField(max_length=50, choices=ACCESS, blank=True, null=False)
    soufflage_area = models.CharField(max_length=50, blank=True, null=False)
    soufflage_height = models.CharField(max_length=50, blank=True, null=False)
    soufflage_trash = models.CharField(max_length=50, blank=True, null=False)
    soufflage_mess = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)
    soufflage_floor = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    thermo_access = models.CharField(max_length=50, choices=ACCESS, blank=True, null=False)
    thermo_area = models.CharField(max_length=50, blank=True, null=False)
    thermo_height = models.CharField(max_length=50, blank=True, null=False)
    thermo_trash = models.CharField(max_length=50, blank=True, null=False)
    thermo_mess = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)
    thermo_floor = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    isol_access = models.CharField(max_length=50, choices=ACCESS, blank=True, null=False)
    isol_area = models.CharField(max_length=50, blank=True, null=False)
    isol_height = models.CharField(max_length=50, blank=True, null=False)
    isol_trash = models.CharField(max_length=50, blank=True, null=False)
    isol_mess = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)
    isol_floor = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    hydro_type = models.CharField(max_length=50, choices=HYDRO, blank=True, null=False)
    hydro_area = models.CharField(max_length=50, blank=True, null=False)
    hydro_roof = models.CharField(max_length=50, choices=TOITURE, blank=True, null=False)
    hydro_color = models.CharField(max_length=50, blank=True, null=False)
    hydro_model = models.CharField(max_length=50, blank=True, null=False)

    fait_roof = models.CharField(max_length=50, choices=TOITURE, blank=True, null=False)
    fait_length = models.CharField(max_length=50, blank=True, null=False)
    fait_length_num = models.CharField(max_length=50, blank=True, null=False)
    fait_color = models.CharField(max_length=50, blank=True, null=False)
    fait_masonry = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    cap_access = models.CharField(max_length=50, choices=ACCESS, blank=True, null=False)
    cap_length = models.CharField(max_length=50, blank=True, null=False)
    cap_type = models.CharField(max_length=50, choices=WALL, blank=True, null=False)
    cap_color = models.CharField(max_length=50, blank=True, null=False)
    cap_mess = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    waterproof_type = models.CharField(max_length=50, choices=PROOF, blank=True, null=False)
    waterproof_roof = models.CharField(max_length=50, choices=TOITURE, blank=True, null=False)
    waterproof_length = models.CharField(max_length=50, blank=True, null=False)
    waterproof_length_num = models.CharField(max_length=50, blank=True, null=False)
    waterproof_masonry = models.CharField(max_length=50, choices=OUI_NON, blank=True, null=False)

    infos = models.TextField(blank=True, null=False)

    created = models.DateTimeField(auto_now_add=True, null=True)
    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.last_name

    class Meta:
        ordering = ['-created']
