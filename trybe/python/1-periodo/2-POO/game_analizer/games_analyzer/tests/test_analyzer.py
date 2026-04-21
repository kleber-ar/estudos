from src.analyser import GamesAnalyser


def test_total_sales_by_console():
    mock_data = [
        {
            "Title": "Lumines: Puzzle Fusion",
            "Metrics": {
                "Sales": 0.56,
            },
            "Release": {
                "Console": "Sony PSP",
                "Year": 2004,
            },
        },
        {
            "Title": "Hot Shots Golf: Open Tee",
            "Metrics": {
                "Sales": 0.49,
            },
            "Release": {
                "Console": "Sony PSP",
                "Year": 2004,
            },
        },
        {
            "Title": "Spider-Man 2",
            "Metrics": {
                "Sales": 0.45,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Year": 2004,
            },
        },
        {
            "Title": "The Urbz: Sims in the City",
            "Metrics": {
                "Sales": 0.41,
            },
            "Release": {
                "Console": "Nintendo 64",
                "Year": 2004,
            },
        },
        {
            "Title": "WarioWare Touched!",
            "Metrics": {
                "Sales": 0.54,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Year": 2004,
            },
        },
    ]

    result = GamesAnalyser(mock_data).get_sales_by_console()

    assert result["Nintendo DS"] == 0.99
