from django.urls import include, path
from rest_framework.routers import DefaultRouter

from news_rest.views.category_view import (
    CategoryViewSet,
)

router = DefaultRouter()

router.register(
    "categories",
    CategoryViewSet,
    basename="categories",
)

urlpatterns = [
    path(
        "",
        include(router.urls),
    ),
]
