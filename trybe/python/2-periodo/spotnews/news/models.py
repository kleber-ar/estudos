from django.db import models
from django.core.exceptions import ValidationError


def validate_title(value):
    if len(value.split()) < 2:
        raise ValidationError(
            "O título deve conter pelo menos 2 palavras."
        )


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return str(self.name)


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    role = models.CharField(max_length=200)

    def __str__(self) -> str:
        return str(self.name)


class News(models.Model):
    title = models.CharField(
        max_length=200,
        validators=[validate_title],
    )
    content = models.TextField()
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    created_at = models.DateField()
    image = models.ImageField(
        upload_to="img/",
        blank=True,
    )
    categories = models.ManyToManyField(Category)

    def __str__(self) -> str:
        return str(self.title)
