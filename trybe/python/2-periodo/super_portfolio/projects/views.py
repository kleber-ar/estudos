from django.shortcuts import render

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)
from rest_framework.viewsets import ModelViewSet

from .models import Profile, Project, Certificate, CertifyingInstitution

from .serializers import (
    ProfileSerializer,
    ProjectSerializer,
    CertificateSerializer,
    CertifyingInstitutionSerializer,
)


class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]

        return [IsAuthenticated()]

    def retrieve(self, request, *args, **kwargs):
        if request.method == "GET":
            profile = self.get_object()

            projects = profile.projects.all()

            certificates = (
                profile.certificates
                .select_related(
                    "certifying_institution"
                )
                .all()
            )

            return render(
                request,
                "profile_detail.html",
                {
                    "profile": profile,
                    "projects": projects,
                    "certificates": certificates,
                },
            )

        return super().retrieve(
            request,
            *args,
            **kwargs,
        )


class CertificateViewSet(ModelViewSet):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer
    permission_classes = [IsAuthenticated]


class CertifyingInstitutionViewSet(
    ModelViewSet
):
    queryset = (
        CertifyingInstitution.objects.all()
    )

    serializer_class = (
        CertifyingInstitutionSerializer
    )

    permission_classes = [
        IsAuthenticated
    ]


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
