import json
from typing import Any
from models import GamesData


class GamesImporter:
    @staticmethod
    def load_games_from_json(file_path: str) -> list[GamesData]:
        games: list[dict[str, Any]] = []

        try:
            with open(file_path, "r") as file:
                games: list[dict[str, Any]] = json.load(file)
        except FileNotFoundError:
            raise FileNotFoundError("Arquivo não encontrado!")
        except json.decoder.JSONDecodeError:
            print("Arquivo com formato inválido!")

        games_data_list: list[GamesData] = []

        for game in games:
            game_data_instance = GamesData(
                title=game["Title"],
                features=game["Features"],
                metadata=game["Metadata"],
                metrics=game["Metrics"],
                release=game["Release"],
                length=game["Length"],
            )
            games_data_list.append(game_data_instance)

        # games_data_list = [
        #     GamesData(
        #         title=game["Title"],
        #         features=game["Features"],
        #         metadata=game["Metadata"],
        #         metrics=game["Metrics"],
        #         release=game["Release"],
        #         length=game["Length"],
        #     )
        #     for game in games
        # ]

        return games_data_list
