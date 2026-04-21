import sys
from analyser import GamesAnalyser
from importer import GamesImporter
from rich import print


def main():
    file_path = sys.argv[1]
    video_games = GamesImporter.load_games_from_json(file_path)
    analyser_instance = GamesAnalyser(video_games)

    consoles = analyser_instance.get_all_consoles()
    print(f"Consoles:\n {consoles}")

    sales = analyser_instance.get_sales_by_console()
    print(f"Vendas (U$k):\n {sales}")


if __name__ == "__main__":
    main()
