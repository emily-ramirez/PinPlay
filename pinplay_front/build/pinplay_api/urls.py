from django.urls import path

from . import views

urlpatterns = [
    path('', views.PlaylistView.as_view()),
]
