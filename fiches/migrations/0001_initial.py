# Generated by Django 4.0.1 on 2022-01-30 16:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0006_alter_profile_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fiche',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('adress', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('post_code', models.CharField(max_length=5)),
                ('phone', models.CharField(max_length=10)),
                ('invoice_number', models.CharField(blank=True, max_length=10, null=True)),
                ('area', models.CharField(blank=True, max_length=10, null=True)),
                ('roof', models.CharField(blank=True, max_length=10, null=True)),
                ('height', models.CharField(blank=True, max_length=10, null=True)),
                ('slant', models.CharField(choices=[('30°', '1.30'), ('45°', '1.45'), ('60°', '1.60')], max_length=20)),
                ('source', models.CharField(choices=[('R1', 'R1'), ('CA', 'Ca'), ('Assistance', 'Assistance')], max_length=20)),
                ('charpente_access', models.CharField(blank=True, choices=[('Intérieur', 'Intérieur'), ('Extérieur', 'Extérieur')], max_length=50)),
                ('charpente_area', models.CharField(blank=True, max_length=50)),
                ('charpente_height', models.CharField(blank=True, max_length=50)),
                ('charpente_job', models.CharField(blank=True, choices=[('Injection', 'Injection'), ('Pulvérisation', 'Pulvérisation'), ('Inj + Pul', 'Inj + Pul')], max_length=50)),
                ('charpente_mess', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('charpente_floor', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('soufflage_access', models.CharField(blank=True, choices=[('Intérieur', 'Intérieur'), ('Extérieur', 'Extérieur')], max_length=50)),
                ('soufflage_area', models.CharField(blank=True, max_length=50)),
                ('soufflage_height', models.CharField(blank=True, max_length=50)),
                ('soufflage_trash', models.CharField(blank=True, max_length=50)),
                ('soufflage_mess', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('soufflage_floor', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('thermo_access', models.CharField(blank=True, choices=[('Intérieur', 'Intérieur'), ('Extérieur', 'Extérieur')], max_length=50)),
                ('thermo_area', models.CharField(blank=True, max_length=50)),
                ('thermo_height', models.CharField(blank=True, max_length=50)),
                ('thermo_trash', models.CharField(blank=True, max_length=50)),
                ('thermo_mess', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('thermo_floor', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('isol_access', models.CharField(blank=True, choices=[('Intérieur', 'Intérieur'), ('Extérieur', 'Extérieur')], max_length=50)),
                ('isol_area', models.CharField(blank=True, max_length=50)),
                ('isol_height', models.CharField(blank=True, max_length=50)),
                ('isol_trash', models.CharField(blank=True, max_length=50)),
                ('isol_mess', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('isol_floor', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('hydro_type', models.CharField(blank=True, choices=[('Incolore', 'Incolore'), ('Coloré gris', 'Coloré gris'), ('Coloré brun', 'Coloré brun'), ('Coloré rouge sombre', 'Coloré rouge sombre')], max_length=50)),
                ('hydro_area', models.CharField(blank=True, max_length=50)),
                ('hydro_roof', models.CharField(blank=True, choices=[('Tuile mécanique', 'Tuile mécanique'), ('Tuile béton', 'Tuile béton'), ('Tuile plate', 'Tuile plate'), ('Ardoise', 'Ardoise'), ('Fibro-ciment', 'Fibro-ciment')], max_length=50)),
                ('hydro_color', models.CharField(blank=True, max_length=50)),
                ('hydro_model', models.CharField(blank=True, max_length=50)),
                ('fait_roof', models.CharField(blank=True, choices=[('Tuile mécanique', 'Tuile mécanique'), ('Tuile béton', 'Tuile béton'), ('Tuile plate', 'Tuile plate'), ('Ardoise', 'Ardoise'), ('Fibro-ciment', 'Fibro-ciment')], max_length=50)),
                ('fait_length', models.CharField(blank=True, max_length=50)),
                ('fait_length_num', models.CharField(blank=True, max_length=50)),
                ('fait_color', models.CharField(blank=True, max_length=50)),
                ('fait_masonry', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('cap_access', models.CharField(blank=True, choices=[('Intérieur', 'Intérieur'), ('Extérieur', 'Extérieur')], max_length=50)),
                ('cap_length', models.CharField(blank=True, max_length=50)),
                ('cap_type', models.CharField(blank=True, choices=[('Parpaing', 'Parpaing'), ('Brique', 'Brique'), ('Béton', 'Béton'), ('Meulière', 'Meulière')], max_length=50)),
                ('cap_color', models.CharField(blank=True, max_length=50)),
                ('cap_mess', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('waterproof_type', models.CharField(blank=True, choices=[('Cheminée', 'Cheminée'), ('Solin', 'Solin'), ('Capucine', 'Capucine'), ('Noue', 'Noue')], max_length=50)),
                ('waterproof_roof', models.CharField(blank=True, choices=[('Tuile mécanique', 'Tuile mécanique'), ('Tuile béton', 'Tuile béton'), ('Tuile plate', 'Tuile plate'), ('Ardoise', 'Ardoise'), ('Fibro-ciment', 'Fibro-ciment')], max_length=50)),
                ('waterproof_length', models.CharField(blank=True, max_length=50)),
                ('waterproof_length_num', models.CharField(blank=True, max_length=50)),
                ('waterproof_masonry', models.CharField(blank=True, choices=[('Oui', 'Oui'), ('Non', 'Non')], max_length=50)),
                ('infos', models.TextField(blank=True, max_length=500)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.profile')),
            ],
        ),
    ]