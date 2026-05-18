from pymongo.collection import ReturnDocument


class AbstractModel():
    _collection = None

    def __init__(self, data):
        self.data = data

    @classmethod
    def create(cls, data):
        insert_result = cls._collection.insert_one(data.__dict__)

        new_item = cls._collection.find_one({"_id": insert_result.inserted_id})
        return cls.model_class(**new_item)

    @classmethod
    def find(cls, query={}) -> list:
        data = cls._collection.find(query)
        return [cls.model_class(**item) for item in data]
