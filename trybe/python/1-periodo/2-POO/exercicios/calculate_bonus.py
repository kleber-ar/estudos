
from abc import ABC, abstractmethod


class Employee(ABC):
    def __init__(self, name: str, salary: float) -> None:
        self.name = name
        self.salary = salary

    @abstractmethod
    def calculate_bonus(self) -> str:
        pass


class Developer(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do programador {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.2)}")


class Analyst(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do analista {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.3)}")


class Manager(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do gerente {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.4)}")


class Worker(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do colaborador {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.1)}")


def main():
    developer = Developer("Rafa", 1500)
    print(developer.calculate_bonus())

    analyst = Analyst("Maria", 1600)
    print(analyst.calculate_bonus())

    manager = Manager("José", 1800)
    print(manager.calculate_bonus())

    worker = Worker("Isabel", 1200)
    print(worker.calculate_bonus())


if __name__ == "__main__":
    main()
