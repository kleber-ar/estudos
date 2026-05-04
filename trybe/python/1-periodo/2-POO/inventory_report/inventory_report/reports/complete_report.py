from collections import Counter
from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    def generate(self) -> str:
        base_report = super().generate()

        products = []
        for inventory in self.inventories:
            products.extend(inventory.data)

        companies = [p.company_name for p in products]
        company_count = Counter(companies)

        # pega a empresa com maior estoque
        top_company = company_count.most_common(1)[0][0]

        stock_by_company = "Stocked products by company:\n"

        # 🔥 primeiro a maior
        stock_by_company += f"- {top_company}: {company_count[top_company]}\n"

        # 🔥 depois as outras
        for company, count in company_count.items():
            if company != top_company:
                stock_by_company += f"- {company}: {count}\n"

        return f"{base_report}\n{stock_by_company}"
