from rest_framework import serializers
from registration.models import registration

class registrationSerializer(serializers.ModelSerializer):
	class Meta:
		model=registration
		fields=['f_name','l_name','course','email','usn','mobile','year','branch','gender','github']