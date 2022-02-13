from django.db import models

class Client(models.Model):
    first_name = models.CharField(max_length=200, null=False, blank=False)
    last_name = models.CharField(max_length=200, null=False, blank=False)
    adress = models.CharField(max_length=200, null=False, blank=False)
    city = models.CharField(max_length=200, null=False, blank=False)
    post_code = models.CharField(max_length=5, null=False, blank=False)
    phone = models.CharField(max_length=10, null=False, blank=False)
    email = models.EmailField(max_length=500, blank=True, null=True)
    birth_date = models.CharField(max_length=10, null=False, blank=False)
    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.last_name

    class Meta:
        ordering = ['-created']

