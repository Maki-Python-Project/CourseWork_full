# Generated by Django 3.2.8 on 2022-02-22 15:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0027_picture'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Picture',
        ),
        migrations.DeleteModel(
            name='UpdateViews',
        ),
    ]