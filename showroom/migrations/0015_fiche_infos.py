# Generated by Django 4.0 on 2022-01-28 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showroom', '0014_alter_fiche_charpente_mess'),
    ]

    operations = [
        migrations.AddField(
            model_name='fiche',
            name='infos',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
