from django.shortcuts import render
from django.views import View
from . import views

# Create your views here.
def login(request):
    return render(request, 'login.html')

def addticket(request):
    return render(request,'addticket.html')

def alltickets(request):
    return render(request,'alltickets.html')

def notification(request):
    return render(request,'notification.html')