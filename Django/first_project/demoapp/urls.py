from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index),
    path(r'addpost/', views.addpost),
    path(r'update/<int:id>', views.update),
    path(r'delete/<int:id>', views.delete)
]

# localhost:8000/number/1000