# Generated by Django 4.0 on 2022-01-28 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showroom', '0013_fiche_cap_access_fiche_cap_color_fiche_cap_length_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fiche',
            name='charpente_mess',
            field=models.CharField(choices=[('Oui/Non', 'Oui/Non'), ('Oui', 'Oui'), ('Non', 'Non')], default='Oui/Non', max_length=50),
        ),
    ]
