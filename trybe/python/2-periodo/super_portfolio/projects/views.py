from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)
from rest_framework.viewsets import ModelViewSet

from .models import Profile
from .serializers import ProfileSerializer


class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_permissions(self):
        if self.action == "retrieve":
            return [AllowAny()]

        return [IsAuthenticated()]
