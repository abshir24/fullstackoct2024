from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index)
]

# localhost:8000/ 