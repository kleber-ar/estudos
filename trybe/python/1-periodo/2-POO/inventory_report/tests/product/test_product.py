from inventory_report.product import Product


def test_create_product():
    product = Product(
        "1",
        "Produto Y",
        "Empresa X",
        "2023-01-01",
        "2025-01-01",
        "ABC123",
        "Manter em local seco",
    )

    assert product.id == "1"
    assert product.company_name == "Empresa X"
    assert product.product_name == "Produto Y"
    assert product.manufacturing_date == "2023-01-01"
    assert product.expiration_date == "2025-01-01"
    assert product.serial_number == "ABC123"
    assert product.storage_instructions == "Manter em local seco"
