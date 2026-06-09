from rest_framework.viewsets import ModelViewSet

from news.models import User
from news_rest.serializers.user_serializer import (
    UserSerializer,
)


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
