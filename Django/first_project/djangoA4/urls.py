from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index),
    path(r'printinfo/', views.printinfo),
    path(r'numbers/', views.numbers),
    path(r'printdata/', views.printdata)
]

# localhost:8000/number/1000