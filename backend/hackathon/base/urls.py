from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet

# Роутер сам сгенерирует ссылки
router = DefaultRouter()
router.register(r"transactions", TransactionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
