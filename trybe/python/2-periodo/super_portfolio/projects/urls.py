from rest_framework.routers import DefaultRouter

from .views import (
    ProfileViewSet,
    ProjectViewSet,
)

router = DefaultRouter()

router.register(
    "profiles",
    ProfileViewSet,
    basename="profiles",
)

router.register(
    "projects",
    ProjectViewSet,
    basename="projects",
)

urlpatterns = router.urls
