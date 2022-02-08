from django.db import models

class Societe(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    adress = models.CharField(max_length=100, blank=True, null=True)
    post_code = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=100, blank=True, null=True)
    siret = models.CharField(max_length=100, blank=True, null=True)
    owner = models.CharField(max_length=100, blank=True, null=True)
    co_owner = models.CharField(max_length=100, blank=True, null=True)   

    def __str__(self):
        return self.name