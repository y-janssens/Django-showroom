# Generated by Django 4.0.1 on 2022-02-15 16:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0004_alter_client_birth_date_alter_client_email'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='client',
            options={'ordering': ['-created']},
        ),
    ]
