from typing import TypedDict


class Quote(TypedDict):
    content: str
    author: str
    tags: list[str]


class StoredQuote(Quote):
    _id: str
