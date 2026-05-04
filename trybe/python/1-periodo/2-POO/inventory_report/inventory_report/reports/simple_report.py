from datetime import date
from collections import Counter
from inventory_report.inventory import Inventory


class SimpleReport:
    def __init__(self):
        self.inventories = []

    def add_inventory(self, inventory: Inventory) -> None:
        self.inventories.append(inventory)

    def generate(self) -> str:
        products = []

        # junta todos os produtos de todos os estoques
        for inventory in self.inventories:
            products.extend(inventory.data)

        # datas
        manufacturing_dates = [p.manufacturing_date for p in products]

        today = date.today()
        valid_products = [
            p for p in products if date.fromisoformat(p.expiration_date) >= today
        ]
        expiration_dates = [p.expiration_date for p in valid_products]

        # empresa com maior estoque
        companies = [p.company_name for p in products]
        company_count = Counter(companies)
        top_company = company_count.most_common(1)[0][0]

        return (
            f"Oldest manufacturing date: {min(manufacturing_dates)}\n"
            f"Closest expiration date: {min(expiration_dates)}\n"
            f"Company with the largest inventory: {top_company}"
        )
