from .db import db
from .abstract_model import AbstractModel
from dataclasses import dataclass
from pymongo.collection import Collection
import random


@dataclass
class JokeCreate:
    joke: str


@dataclass
class Joke(JokeCreate):
    _id: str

    def __post_init__(self):
        self._id = str(self._id)


class JokeModel(AbstractModel):
    _collection: Collection = db["jokes"]
    model_class = Joke  # Repare que usamos a classe diretamente, sem instanciá-la

    @classmethod
    def get_random(cls):
        data = cls.find()
        try:
            return random.choice(data)
        except IndexError:
            return None
