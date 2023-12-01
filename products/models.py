from django.db import models

class Brand(models.Model):
    name = models.CharField(max_length=255)
    logo_url = models.URLField()

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image_url = models.URLField()
    category = models.CharField(max_length=255, default='No-category')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name
