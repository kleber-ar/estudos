# /// script
# dependencies = [
#   "pymongo",
# ]
# ///

# tem q baixar o mongoDB e popular com json do book. Fiz com docker

from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
