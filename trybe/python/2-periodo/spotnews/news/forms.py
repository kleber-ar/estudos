from django import forms

from .models import Category, User


class CategoryForm(forms.Form):
    name = forms.CharField(
        label="Nome",
        max_length=200,
        required=True,
    )


class NewsForm(forms.Form):
    title = forms.CharField(
        label="Título",
        max_length=200,
        required=True,
    )

    content = forms.CharField(
        label="Conteúdo",
        widget=forms.Textarea,
        required=True,
    )

    author = forms.ModelChoiceField(
        label="Autoria",
        queryset=User.objects.none(),
        required=True,
    )

    created_at = forms.DateField(
        label="Criado em",
        widget=forms.DateInput(
            attrs={"type": "date"},
        ),
        required=True,
    )

    image = forms.ImageField(
        label="URL da Imagem",
        required=False,
    )

    categories = forms.ModelMultipleChoiceField(
        queryset=Category.objects.none(),
        widget=forms.CheckboxSelectMultiple,
        required=True,
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields["author"].queryset = (
            User.objects.all()
        )

        self.fields["categories"].queryset = (
            Category.objects.all()
        )
