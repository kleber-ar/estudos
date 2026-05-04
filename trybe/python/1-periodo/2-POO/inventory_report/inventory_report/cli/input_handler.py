from typing import List
from inventory_report.inventory import Inventory
from inventory_report.importers import IMPORTERS
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


def process_report_request(file_paths: List[str], report_type: str) -> str:
    # escolhe o tipo de relatório
    if report_type == "simple":
        report = SimpleReport()
    elif report_type == "complete":
        report = CompleteReport()
    else:
        raise ValueError("Report type is invalid.")

    # processa cada arquivo
    for path in file_paths:
        extension = path.split(".")[-1]

        if extension not in IMPORTERS:
            continue  # ignora arquivos inválidos

        importer_class = IMPORTERS[extension]
        importer = importer_class(path)

        products = importer.import_data()

        inventory = Inventory(products)
        report.add_inventory(inventory)

    return report.generate()
