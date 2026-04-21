class Book:
    def __init__(self, title: str, author: str, pages: int) -> None:
        self.title = title
        self.author = author
        self.pages = pages

    def description(self) -> str:
        return f"{self.title}, de {self.author}, tem {self.pages} páginas."


book = Book("Os pequenos jangadeiros", "Aristides Fraga Lima", 96)

print(book.description())
# Os pequenos jangadeiros, de Aristides Fraga Lima, tem 96 páginas.
