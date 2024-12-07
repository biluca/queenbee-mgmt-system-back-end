import locale
from uuid import uuid4
from django.db import models
from django.db import models
from django.contrib import admin
from queenbee_api.const import GenericValues, GenericStatus

class GenericModel(models.Model):
    uuid = models.UUIDField(default=uuid4, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    @admin.display(description="objid")
    def uuidf(self):
        return str(self.uuid)[0:8]
    
    @property
    @admin.display(description="Criado em:")
    def created(self):
        return self.created_at.strftime("%d/%m/%Y %H:%M")

    @property
    @admin.display(description="Modific. em:")
    def updated(self):
        return self.created_at.strftime("%d/%m/%Y %H:%M")

    class Meta:
        abstract = True  

class Customer(GenericModel):
    name = models.CharField(max_length=255, verbose_name="Nome Cliente")
    email = models.EmailField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=30, blank=True, null=True)  
    instagram = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.name}({self.instagram})"

class Appointment(GenericModel):

    customer = models.ForeignKey(Customer, on_delete=models.DO_NOTHING )

    appointment_date = models.DateField()
    appointment_hour = models.TimeField()
    appointment_type = models.CharField(max_length=128, choices=GenericValues.get("APPOINTMENT"), null=False)
    appointment_status = models.CharField(max_length=128, choices=GenericStatus.get("APPOINTMENT"), null=False)

    def __str__(self):
        return f"Appointment {self.uuid} - {self.appointment_type}"

    def date(self):
     return self.appointment_date.strftime("%d/%m/%Y")

    def hour(self):
     return self.appointment_hour.strftime("%H:%M")

class Finance(GenericModel):

    item = models.CharField(max_length=255)
    value = models.DecimalField(max_digits=10, decimal_places=2)
    finance_type = models.CharField(max_length=128, choices=GenericValues.get("FINANCE_TYPE"), null=False)
    finance_category = models.CharField(max_length=128, choices=GenericValues.get("FINANCE_CATEGORY"), null=False)
    payment_type = models.CharField(max_length=128, choices=GenericValues.get("PAYMENT"), null=False)
    payment_date = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.finance_category} - {self.value}"

    @property
    def date(self):
        return self.payment_date.strftime("%d/%m/%Y")

    @property
    def valuef(self):
        locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')
        return locale.currency(self.value, grouping=True)
       

        
