from rest_framework import serializers
from .models import Product, Brand

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'logo_url']

class ProductSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'image_url', 'price', 'brand', 'category']

    def create(self, validated_data):
        brand_data = validated_data.pop('brand')
        brand_instance, _ = Brand.objects.get_or_create(**brand_data)
        product = Product.objects.create(brand=brand_instance, **validated_data)
        return product

