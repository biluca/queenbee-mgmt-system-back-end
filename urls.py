from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,TokenVerifyView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('login/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path("api/", include("queenbee_api.urls")),
]


from rest_framework_simplejwt.views import TokenVerifyView

