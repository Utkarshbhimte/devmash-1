from django.contrib import admin
from registration.models import registration
from import_export.admin import ImportExportModelAdmin
from import_export import resources
# Register your models here.
class registrationResource(resources.ModelResource):
    class Meta:
        model = registration

class registrationAdmin(ImportExportModelAdmin):
    resource_class = registrationResource
    pass

admin.site.register(registration, registrationAdmin)