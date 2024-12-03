from django.contrib import admin

from queenbee_api.models import Appointment, Customer, Finance

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = [
        "uuidf",
        "name",
        "phone_number",
        "email",
        "instagram",
        "created",
        "updated",
    ]

    list_filter = [
        "name",
    ]
@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = [
        "uuidf",
        "appointment_type",
        "date",
        "hour",
        "appointment_status",
        "created",
        "updated",
    ]

@admin.register(Finance)
class FinanceAdmin(admin.ModelAdmin):
    list_display = [
        "uuidf",
        "item",
        "valuef",
        "payment_type",
        "finance_type",
        "finance_category",
        "date",
        "created",
        "updated",
    ]
