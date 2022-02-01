# Generated by Django 4.0 on 2022-01-26 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='role',
            field=models.CharField(blank=True, choices=[('rôle', 'rôle'), ('direction', 'direction'), ('commercial', 'commercial'), ('technicien', 'technicien')], default='rôle', max_length=20, null=True),
        ),
    ]