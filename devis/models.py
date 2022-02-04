from django.db import models
from users.models import Profile

class Devi(models.Model):

    estimate_number = models.CharField(max_length=200, null=False, blank=False)
    date = models.DateTimeField(auto_now_add=True, null=True)

    customer = models.CharField(max_length=200, null=True, blank=True)
    customer_adress = models.CharField(max_length=200, null=True, blank=True)
    customer_city = models.CharField(max_length=200, null=True, blank=True)
    customer_post_code = models.CharField(max_length=200, null=True, blank=True)
    customer_phone = models.CharField(max_length=200, null=True, blank=True)

    product_1 = models.CharField(max_length=200, null=True, blank=True)
    quantity_1 = models.CharField(max_length=200, null=True, blank=True)
    unit_1 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_1 = models.CharField(max_length=200, null=True, blank=True)
    vat_1 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_1 = models.CharField(max_length=200, null=True, blank=True)
    total_full_1 = models.CharField(max_length=200, null=True, blank=True)

    total_ht = models.CharField(max_length=200, null=True, blank=True)
    total_vat = models.CharField(max_length=200, null=True, blank=True)
    total_full = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.estimate_number
