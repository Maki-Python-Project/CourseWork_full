# Generated by Django 3.2.8 on 2021-10-18 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0017_auto_20211009_1107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='updateviews',
            name='applied',
            field=models.IntegerField(blank=True, default=0, null=True, verbose_name='Просмотры'),
        ),
    ]
