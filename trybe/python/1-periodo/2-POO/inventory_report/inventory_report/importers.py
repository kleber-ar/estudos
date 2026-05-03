import json
from abc import ABC, abstractmethod
from typing import Dict, List, Type

from inventory_report.product import Product


class Importer(ABC):
    def __init__(self, path: str):
        self.path = path

    @abstractmethod
    def import_data(self) -> List[Product]:
        pass


class JsonImporter(Importer):
    def import_data(self) -> List[Product]:
        if not self.path.endswith(".json"):
            raise ValueError("Arquivo inválido")

        with open(self.path) as file:
            data = json.load(file)

        products = [Product(**item) for item in data]

        return products


class CsvImporter:
    pass


# Não altere a variável abaixo

IMPORTERS: Dict[str, Type[Importer]] = {
    "json": JsonImporter,
    "csv": CsvImporter,
}
