from django.db import models
from users.models import Profile

class Facture(models.Model):

    invoice_number = models.CharField(max_length=200, null=False, blank=False)
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

    product_2 = models.CharField(max_length=200, null=True, blank=True)
    quantity_2 = models.CharField(max_length=200, null=True, blank=True)
    unit_2 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_2 = models.CharField(max_length=200, null=True, blank=True)
    vat_2 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_2 = models.CharField(max_length=200, null=True, blank=True)
    total_full_2 = models.CharField(max_length=200, null=True, blank=True)

    product_3 = models.CharField(max_length=200, null=True, blank=True)
    quantity_3 = models.CharField(max_length=200, null=True, blank=True)
    unit_3 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_3 = models.CharField(max_length=200, null=True, blank=True)
    vat_3 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_3 = models.CharField(max_length=200, null=True, blank=True)
    total_full_3 = models.CharField(max_length=200, null=True, blank=True)

    product_4 = models.CharField(max_length=200, null=True, blank=True)
    quantity_4 = models.CharField(max_length=200, null=True, blank=True)
    unit_4 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_4 = models.CharField(max_length=200, null=True, blank=True)
    vat_4 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_4 = models.CharField(max_length=200, null=True, blank=True)
    total_full_4 = models.CharField(max_length=200, null=True, blank=True)

    product_5 = models.CharField(max_length=200, null=True, blank=True)
    quantity_5 = models.CharField(max_length=200, null=True, blank=True)
    unit_5 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_5 = models.CharField(max_length=200, null=True, blank=True)
    vat_5 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_5 = models.CharField(max_length=200, null=True, blank=True)
    total_full_5 = models.CharField(max_length=200, null=True, blank=True)

    product_6 = models.CharField(max_length=200, null=True, blank=True)
    quantity_6 = models.CharField(max_length=200, null=True, blank=True)
    unit_6 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_6 = models.CharField(max_length=200, null=True, blank=True)
    vat_6 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_6 = models.CharField(max_length=200, null=True, blank=True)
    total_full_6 = models.CharField(max_length=200, null=True, blank=True)

    product_7 = models.CharField(max_length=200, null=True, blank=True)
    quantity_7 = models.CharField(max_length=200, null=True, blank=True)
    unit_7 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_7 = models.CharField(max_length=200, null=True, blank=True)
    vat_7 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_7 = models.CharField(max_length=200, null=True, blank=True)
    total_full_7 = models.CharField(max_length=200, null=True, blank=True)

    product_8 = models.CharField(max_length=200, null=True, blank=True)
    quantity_8 = models.CharField(max_length=200, null=True, blank=True)
    unit_8 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_8 = models.CharField(max_length=200, null=True, blank=True)
    vat_8 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_8 = models.CharField(max_length=200, null=True, blank=True)
    total_full_8 = models.CharField(max_length=200, null=True, blank=True)

    product_9 = models.CharField(max_length=200, null=True, blank=True)
    quantity_9 = models.CharField(max_length=200, null=True, blank=True)
    unit_9 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_9 = models.CharField(max_length=200, null=True, blank=True)
    vat_9 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_9 = models.CharField(max_length=200, null=True, blank=True)
    total_full_9 = models.CharField(max_length=200, null=True, blank=True)

    product_10 = models.CharField(max_length=200, null=True, blank=True)
    quantity_10 = models.CharField(max_length=200, null=True, blank=True)
    unit_10 = models.CharField(max_length=200, null=True, blank=True)
    unit_price_10 = models.CharField(max_length=200, null=True, blank=True)
    vat_10 = models.CharField(max_length=200, null=True, blank=True)
    total_vat_10 = models.CharField(max_length=200, null=True, blank=True)
    total_full_10 = models.CharField(max_length=200, null=True, blank=True)

    total_ht = models.CharField(max_length=200, null=True, blank=True)
    total_vat = models.CharField(max_length=200, null=True, blank=True)
    total_full = models.CharField(max_length=200, null=True, blank=True)

    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.invoice_number

    class Meta:
        ordering = ['-date']
