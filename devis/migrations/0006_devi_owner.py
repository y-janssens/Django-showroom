# Generated by Django 4.0.1 on 2022-02-05 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_profile_role'),
        ('devis', '0005_devi_product_10_devi_product_4_devi_product_5_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='devi',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.profile'),
        ),
    ]