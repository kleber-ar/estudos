from .db import db
from .abstract_model import AbstractModel

from pymongo.collection import Collection

from datetime import datetime
from dataclasses import dataclass, field
from typing import Type


def current_timestamp():
    return datetime.now().strftime("%H:%M")


@dataclass
class MessageCreate:
    content: str
    recipient: str
    sender: str
    # Para que o campo time seja preenchido automaticamente, podemos usar a
    # função `field` com o argumento `default_factory` e passar a função que
    # retorna o timestamp atual. 
    # Essa é uma funcionalidade de dataclasses do Python, não tem a ver especificamente com Flask.
    time: str = field(default_factory=current_timestamp)


@dataclass
class Message(MessageCreate):
    _id: str = ""
    # Obs: Diferente das nossas outras models, o Python exige um valor padrão
    # nesse caso, pois a classe superior já possui um atributo com valor padrão (time).
    # Caso contrário, o Python acusará um erro de sintaxe.

    def __post_init__(self):
        self._id = str(self._id)


class MessageRepository(AbstractModel):
    _collection: Collection = db["chat"]
    model_class: Type = Message
    @classmethod
    def get_session_messages(cls, username: str) -> list[Message]:
        return [
            cls.model_class(**item)
            for item in cls._collection.find(
                {"$or": [{"recipient": username}, {"sender": username}]}
            )
        ]