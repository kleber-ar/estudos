from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)
from rest_framework.viewsets import ModelViewSet

from .models import Profile, Project
from .serializers import (
    ProfileSerializer,
    ProjectSerializer,
)


class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_permissions(self):
        if self.action == "retrieve":
            return [AllowAny()]

        return [IsAuthenticated()]


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
