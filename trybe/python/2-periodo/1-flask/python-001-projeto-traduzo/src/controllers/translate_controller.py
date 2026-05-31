from flask import Blueprint, render_template, request
from deep_translator import GoogleTranslator
from models.language_model import LanguageModel
from models.history_model import HistoryModel


translate_controller = Blueprint("translate_controller", __name__)


# Reqs. 4 e 5
@translate_controller.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        text_to_translate = request.form["text-to-translate"]
        translate_from = request.form["translate-from"]
        translate_to = request.form["translate-to"]

        HistoryModel(
            {
                "text_to_translate": text_to_translate,
                "translate_from": translate_from,
                "translate_to": translate_to,
            }
        ).save()

        translated = GoogleTranslator(
            source=translate_from,
            target=translate_to,
        ).translate(text_to_translate)

        return render_template(
            "index.html",
            languages=LanguageModel.find(),
            text_to_translate=text_to_translate,
            translate_from=translate_from,
            translate_to=translate_to,
            translated=translated,
        )

    return render_template(
        "index.html",
        languages=LanguageModel.find(),
        text_to_translate="O que deseja traduzir?",
        translate_from="pt",
        translate_to="en",
        translated="What do you want to translate?",
    )

# Req. 6


@translate_controller.route("/reverse", methods=["POST"])
def reverse():
    text_to_translate = request.form["text-to-translate"]
    translate_from = request.form["translate-from"]
    translate_to = request.form["translate-to"]

    translated = GoogleTranslator(
        source=translate_from,
        target=translate_to,
    ).translate(text_to_translate)

    return render_template(
        "index.html",
        languages=LanguageModel.find(),
        text_to_translate=translated,
        translated=text_to_translate,
        translate_from=translate_to,
        translate_to=translate_from,
    )
