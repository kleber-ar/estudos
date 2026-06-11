from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=255)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.name
