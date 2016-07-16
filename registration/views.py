from django.shortcuts import render,HttpResponse,render_to_response,HttpResponseRedirect,RequestContext
from registration.models import registration
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from registration.serializers import registrationSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
import json
from django.http import JsonResponse
from django.contrib.auth.models import User

def index(request):
	if request.method=="POST":
		print request.POST
		print json.loads(request.body).get("f_name")
		serializer=registrationSerializer(data=json.loads(request.body))
		if serializer.is_valid():
			serializer.save()
			message={"message":"Successfully Registered!!"}
		else:
			print serializer.errors
			message={"message":serializer.errors[serializer.errors.keys()[0]][0]}
		return HttpResponse(json.dumps(message))
	return render_to_response("index.html",{"message":""},RequestContext(request))

@api_view(['POST'])
@authentication_classes((TokenAuthentication,))
@permission_classes((IsAuthenticated,))
def register(request):
	if request.method=="POST":
		serializer=registrationSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.errors)
		print serializer.errors
		#return "Please fill all the forms appropriately"
		return Response(serializer.errors) 