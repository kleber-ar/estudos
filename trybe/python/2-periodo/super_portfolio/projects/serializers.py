from rest_framework import serializers

from .models import (
    Certificate,
    CertifyingInstitution,
    Profile,
    Project,
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "name",
            "description",
            "github_url",
            "keyword",
            "key_skill",
            "profile",
        ]


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate

        fields = [
            "id",
            "name",
            "certifying_institution",
            "timestamp",
            "profiles",
        ]

        read_only_fields = [
            "timestamp",
        ]

        extra_kwargs = {
            "profiles": {
                "required": False,
            },
            "certifying_institution": {
                "required": False,
            },
        }


class CertifyingInstitutionSerializer(
    serializers.ModelSerializer
):
    certificates = CertificateSerializer(
        many=True,
        required=True,
    )

    class Meta:
        model = CertifyingInstitution

        fields = [
            "id",
            "name",
            "url",
            "certificates",
        ]

    def create(self, validated_data):
        certificates_data = validated_data.pop(
            "certificates",
            [],
        )

        institution = (
            CertifyingInstitution.objects.create(
                **validated_data
            )
        )

        for item in certificates_data:
            profiles = item.pop(
                "profiles",
                [],
            )

            certificate = (
                Certificate.objects.create(
                    certifying_institution=institution,
                    **item,
                )
            )

            if profiles:
                certificate.profiles.set(
                    profiles
                )

        return institution
