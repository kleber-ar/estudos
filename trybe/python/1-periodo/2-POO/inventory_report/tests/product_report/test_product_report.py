from inventory_report.product import Product


def test_product_report():
    product = Product(
        "1",
        "farinha",
        "Farinini",
        "01-05-2021",
        "02-06-2023",
        "TY68 409C JJ43 ASD1 PL2F",
        "precisa ser armazenado em local protegido da luz",
    )

    expected = (
        "The product 1 - farinha with serial number TY68 409C JJ43 ASD1 PL2F "
        "manufactured on 01-05-2021 by the company Farinini "
        "valid until 02-06-2023 must be stored according to the following "
        "instructions: precisa ser armazenado em local protegido da luz."
    )

    assert str(product) == expected
