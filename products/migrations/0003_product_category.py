# Generated by Django 4.2.7 on 2023-11-30 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_brand_product_brand'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default='No-category', max_length=255),
        ),
    ]
