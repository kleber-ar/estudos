from rest_framework.viewsets import ModelViewSet

from news.models import News
from news_rest.serializers.news_serializer import (
    NewsSerializer,
)


class NewsViewSet(ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
