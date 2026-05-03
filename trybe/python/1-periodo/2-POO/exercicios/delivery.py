from abc import ABC, abstractmethod


class Customer:
    def __init__(self, name: str, phone: str) -> None:
        self.name = name
        self.phone = phone


class Address:
    def __init__(
        self, street: str, number: int, city: str, state: str
    ) -> None:
        self.street = street
        self.number = number
        self.city = city
        self.state = state


class Deliverable(ABC):
    @abstractmethod
    def delivery(self, customer: Customer, address: Address) -> None:
        pass


class Mail(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(f"O pacote foi entregue com sucesso para o cliente {
              customer.name}")
        print(
            f"Endereço: {address.street}, {address.number}, "
            f"{address.city}, {address.state}"
        )
        print(f"Telefone: {customer.phone}")


class ShippingCompany(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(f"A carga foi entregue com sucesso para o cliente {
              customer.name}")
        print(
            f"Endereço: {address.street}, {address.number}, "
            f"{address.city}, {address.state}"
        )
        print(f"Telefone: {customer.phone}")


def main():
    mail = Mail()
    shipping_company = ShippingCompany()

    customer = Customer("Rafa", "99999-9999")
    address = Address("Rua A", 123, "São Paulo", "SP")

    mail.delivery(customer, address)
    shipping_company.delivery(customer, address)


if __name__ == "__main__":
    main()
