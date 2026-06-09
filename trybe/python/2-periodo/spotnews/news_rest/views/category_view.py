from rest_framework.viewsets import ModelViewSet

from news.models import Category
from news_rest.serializers.category_serializer import (
    CategorySerializer,
)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
