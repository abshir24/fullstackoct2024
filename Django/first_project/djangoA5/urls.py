from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index),
    path(r'addtwo/', views.addtwo),
    path(r'reset/', views.reset)
]

# localhost:8000/number/1000