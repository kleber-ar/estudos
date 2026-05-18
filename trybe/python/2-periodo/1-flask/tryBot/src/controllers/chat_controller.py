from flask import Blueprint, request, render_template
import random
from models.joke_model import JokeModel
from models.message_model import MessageCreate, MessageRepository

chat_controller = Blueprint("chat_controller", __name__)


# GET considerará uma pessoa visitante, e POST usará o nome recebido do formulário
@chat_controller.route("/", methods=["GET", "POST"])
def continue_chat():
    username = request.form.get("username") or "Visitante"
    user_message_content = request.form.get("message-content")

    if user_message_content:
        MessageRepository.create(
            MessageCreate(
                content=user_message_content,
                sender=username,
                recipient="Trybot"
            )
        )

    # Prepara a resposta ou mensagem de boas-vindas
    answer = _prepare_answer(username, user_message_content)

    MessageRepository.create(
        MessageCreate(content=answer, sender="Trybot", recipient=username)
    )

    # Retorna todas as mensagens que este usuário possui com o bot
    session_messages = MessageRepository.get_session_messages(username)
    return render_template(
        "chat.html", username=username, session_messages=session_messages
    )



# Métodos auxiliares
def _prepare_answer(name, message_content):
    if not message_content:
        return _answer_first(name)
    if "1" in message_content:
        return _answer_joke()
    return _answer_default()


def _answer_first(name):
    return (
        f"Olá { name }, boas-vindas à central de atendimento! Por hora posso "
        "te ajudar em algumas coisas 😄<br>1 - Contar uma piada"
    )


def _answer_default():
    return random.choice(
        [
            "Interessante, me conte mais sobre isso.",
            "Compreendo como você se sente.",
            "Isso é algo com o qual muitas pessoas lidam.",
            "Como você está lidando com isso?",
            "Eu estou aqui para você, se precisar conversar.",
        ]
    )


def _answer_joke():
    random_joke = JokeModel.get_random()
    return random_joke.joke if random_joke else "Ainda não conheço piadas"