from django.urls import include, path
from rest_framework.routers import DefaultRouter

from news_rest.views.category_view import (
    CategoryViewSet,
)
from news_rest.views.user_view import (
    UserViewSet,
)

router = DefaultRouter()

router.register(
    "categories",
    CategoryViewSet,
    basename="categories",
)
router.register(
    "users",
    UserViewSet,
    basename="users",
)

urlpatterns = [
    path(
        "",
        include(router.urls),
    ),
]
