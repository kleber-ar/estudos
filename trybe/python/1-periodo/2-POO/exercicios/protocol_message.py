from typing import Union, Tuple, Protocol
from queue import Queue


class MessagingProtocol(Protocol):
    def send_message(self, to: str, message: str) -> bool:
        ...  # "Pass" signica q o retorno é vazio ou seja none o "..." signica q o retorno deve ser feito no herdeiro.

    def receive_message(self) -> Union[Tuple[str, str], None]:
        ...


class InMemoryMessaging(MessagingProtocol):
    def __init__(self) -> None:
        self.messages: Queue[Tuple[str, str]] = Queue()

    def send_message(self, to: str, message: str) -> bool:
        self.messages.put((to, message))
        return True

    def receive_message(self) -> Union[Tuple[str, str], None]:
        if self.messages.empty():
            return None
        return self.messages.get()


class FileMessaging(MessagingProtocol):
    def __init__(self, filename: str) -> None:
        self.filename = filename

    def send_message(self, to: str, message: str) -> bool:
        with open(self.filename, "a") as f:
            f.write(f"{to}:{message}\n")
        return True

    def receive_message(self) -> Union[Tuple[str, str], None]:
        with open(self.filename, "r") as f:
            lines = f.readlines()
        if not lines:
            return None
        line = lines[0]
        with open(self.filename, "w") as f:
            f.writelines(lines[1:])
        return line.split(":")[0], line.split(":")[1]


def main():
    in_memory_messaging = InMemoryMessaging()
    file_messaging = FileMessaging("messages.txt")

    in_memory_messaging.send_message("Julia", "Oi, tudo bem?")
    in_memory_messaging.send_message("Julia", "Como foi o seu dia?")
    in_memory_messaging.send_message("Julia", "Desejo um bom final de semana!")

    file_messaging.send_message("Paulo", "Como tá?")
    file_messaging.send_message("Paulo", "Muito obrigado!")
    file_messaging.send_message("Paulo", "Tenha um ótimo dia!")

    print(in_memory_messaging.receive_message())
    print(in_memory_messaging.receive_message())
    print(in_memory_messaging.receive_message())

    print(file_messaging.receive_message())
    print(file_messaging.receive_message())
    print(file_messaging.receive_message())


if __name__ == "__main__":
    main()
