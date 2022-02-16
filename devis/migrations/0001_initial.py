# Generated by Django 4.0.1 on 2022-02-16 01:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Devi',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('estimate_number', models.CharField(max_length=200)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('validity', models.CharField(blank=True, max_length=200, null=True)),
                ('customer', models.CharField(blank=True, max_length=200, null=True)),
                ('customer_adress', models.CharField(blank=True, max_length=200, null=True)),
                ('customer_city', models.CharField(blank=True, max_length=200, null=True)),
                ('customer_post_code', models.CharField(blank=True, max_length=200, null=True)),
                ('customer_phone', models.CharField(blank=True, max_length=200, null=True)),
                ('product_1', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_1', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_1', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_1', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_1', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_1', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_1', models.CharField(blank=True, max_length=200, null=True)),
                ('product_2', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_2', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_2', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_2', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_2', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_2', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_2', models.CharField(blank=True, max_length=200, null=True)),
                ('product_3', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_3', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_3', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_3', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_3', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_3', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_3', models.CharField(blank=True, max_length=200, null=True)),
                ('product_4', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_4', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_4', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_4', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_4', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_4', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_4', models.CharField(blank=True, max_length=200, null=True)),
                ('product_5', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_5', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_5', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_5', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_5', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_5', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_5', models.CharField(blank=True, max_length=200, null=True)),
                ('product_6', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_6', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_6', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_6', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_6', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_6', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_6', models.CharField(blank=True, max_length=200, null=True)),
                ('product_7', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_7', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_7', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_7', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_7', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_7', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_7', models.CharField(blank=True, max_length=200, null=True)),
                ('product_8', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_8', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_8', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_8', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_8', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_8', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_8', models.CharField(blank=True, max_length=200, null=True)),
                ('product_9', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_9', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_9', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_9', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_9', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_9', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_9', models.CharField(blank=True, max_length=200, null=True)),
                ('product_10', models.CharField(blank=True, max_length=200, null=True)),
                ('quantity_10', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_10', models.CharField(blank=True, max_length=200, null=True)),
                ('unit_price_10', models.CharField(blank=True, max_length=200, null=True)),
                ('vat_10', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat_10', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full_10', models.CharField(blank=True, max_length=200, null=True)),
                ('total_ht', models.CharField(blank=True, max_length=200, null=True)),
                ('total_vat', models.CharField(blank=True, max_length=200, null=True)),
                ('total_full', models.CharField(blank=True, max_length=200, null=True)),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.profile')),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
    ]
