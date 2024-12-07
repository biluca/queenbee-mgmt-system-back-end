from rest_framework import serializers
from queenbee_api.models import Customer

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["uuid", "uuidf", "name", "email", "phone_number", "instagram"]