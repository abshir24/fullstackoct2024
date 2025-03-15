from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index),
    path(r'display-name/<name>/', views.display_name),
    path(r'display-food/<food>/', views.display_food),
    path(r'display-vacation/<vacation>/', views.display_vacation),
]

# localhost:8000/number/1000