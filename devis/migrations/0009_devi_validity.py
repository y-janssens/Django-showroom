# Generated by Django 4.0.1 on 2022-02-05 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devis', '0008_devi_total_full_devi_total_full_1_devi_total_full_10_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='devi',
            name='validity',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]