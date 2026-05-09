import os
from pymongo import MongoClient
from pymongo.collection import Collection
from quotes_toscrape.entities import Quote, StoredQuote

db_client = MongoClient(os.environ.get("MONGODB_URI"))

db = db_client["quotes_db"]


class QuotesRepository:
    _collection: Collection = db["quotes"]

    @classmethod
    def insert_many(cls, quotes: list[Quote]):
        cls._collection.insert_many(quotes)

    @classmethod
    def find_many(cls, query={}) -> list[StoredQuote]:
        return [
            {
                "_id": str(doc["_id"]),
                "content": doc["content"],
                "tags": doc["tags"],
                "author": doc["author"],
            }
            for doc in cls._collection.find(query)
        ]
