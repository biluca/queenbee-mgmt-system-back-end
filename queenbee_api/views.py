from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework import permissions

from queenbee_api.models import Customer
from queenbee_api.serializers import CustomerDetailSerializer

class ListDetailModelViewSet(ModelViewSet):
    detail_serializer_class = None
    list_serializer_class = None

    def get_serializer_class(self):
        if self.serializer_class is not None:
            return self.serializer_class

        has_detail_serializer_class = self.detail_serializer_class is not None
        has_list_serializer_class = self.list_serializer_class is not None

        validation_message = f"{self.__class__.__name__} should either include a `detail_serializer_class` attribute and a `list_serializer_class` attribute, or a `serializer_class` attribute, or override the `get_serializer_class()` method."
        assert (
            has_detail_serializer_class and has_list_serializer_class
        ), validation_message

        if self.kwargs.get("pk"):
            return self.detail_serializer_class
        return self.list_serializer_class


class CustomersView(ListDetailModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailSerializer

    permission_classes = [permissions.IsAuthenticated]