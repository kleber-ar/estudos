class Car:
    def __init__(self, model: str, year: int) -> None:
        self.model = model
        self.year = year
        self.speed = 0

    def speed_up(self, amount: int) -> None:
        self.speed += amount
        print(
            f"O carro {self.model} do ano {self.year} "
            f"acelera a {self.speed} km/h"
        )

    def speed_down(self, amount: int) -> None:
        self.speed -= amount
        print(
            f"O carro {self.model} do ano {self.year} "
            f"desacelera a {self.speed} km/h"
        )


car = Car("Fusca", 1980)
car.speed_up(20)
car.speed_down(10)
