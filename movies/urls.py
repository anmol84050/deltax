from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('edit_movies/', views.edit_movies, name='edit_movies'),

]
