from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.get_cart, name='get_cart'),
    path('api/add/', views.add_to_cart, name='add_to_cart'),
    path('api/remove/', views.remove_from_cart, name='remove_from_cart'),
    path('api/get_products', views.get_products, name='get_products'),
    
]