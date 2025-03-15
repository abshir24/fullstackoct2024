from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index),
    path(r'number/<int:number>/', views.display_number)
]

# localhost:8000/number/1000