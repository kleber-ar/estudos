from rest_framework.routers import DefaultRouter

from .views import (
    CertificateViewSet,
    CertifyingInstitutionViewSet,
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

router.register(
    "certificates",
    CertificateViewSet,
)

router.register(
    "certifying-institutions",
    CertifyingInstitutionViewSet,
)

urlpatterns = router.urls
