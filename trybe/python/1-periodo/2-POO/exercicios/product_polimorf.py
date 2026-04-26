
class Product:
    def __init__(self, name: str, price: float) -> None:
        self._name = name
        self._price = price

    def get_description(self) -> None:
        pass

    def get_price(self) -> None:
        pass


class Book(Product):
    def __init__(self, name: str, author: str, price: float) -> None:
        super().__init__(name, price)
        self._author = author

    def get_description(self) -> str:
        return f"{self._name} por {self._author}"

    def get_price(self) -> float:
        return self._price


class DVD(Product):
    def __init__(self, name: str, direction: str, price: float) -> None:
        super().__init__(name, price)
        self._direction = direction

    def get_description(self) -> str:
        return f"{self._name} dirigido por {self._direction}"

    def get_price(self) -> float:
        return self._price


def print_details(product: Product) -> None:
    print(f"Descrição: {product.get_description()}")
    print(f"Preço: {product.get_price()}")


products = [
    Book("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99),
    DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
]

for product in products:
    print_details(product)

# Saída:
# Descrição: O Senhor dos Anéis por J.R.R. Tolkien
# Preço: 29.99
# Descrição: O Poderoso Chefão dirigido por Francis Ford Coppola
# Preço: 19.99
