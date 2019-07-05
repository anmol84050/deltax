from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_actors, name='get_actors'),
]
