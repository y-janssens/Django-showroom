# Generated by Django 4.0.1 on 2022-02-05 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devis', '0002_devi_customer_devi_customer_adress_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='devi',
            name='product_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='devi',
            name='quantity_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='devi',
            name='total_full_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='devi',
            name='total_vat_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='devi',
            name='unit_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='devi',
            name='unit_price_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='devi',
            name='vat_2',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]