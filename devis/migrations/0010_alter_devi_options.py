# Generated by Django 4.0.1 on 2022-02-15 16:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('devis', '0009_devi_validity'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='devi',
            options={'ordering': ['-date']},
        ),
    ]
