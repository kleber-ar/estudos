from models import GamesData


class GamesAnalyser:
    def __init__(self, games_data: list[GamesData]):
        self._games_data = games_data

    def get_all_consoles(self) -> set[str]:
        all_consoles: set[str] = set()
        for game in self._games_data:
            console = str(game.release["Console"])
            all_consoles.add(console)
        return all_consoles

    def get_sales_by_console(self):
        result: dict[str, float] = dict()
        for game in self._games_data:
            console = str(game.release["Console"])
            sales = game.metrics["Sales"]

            if console in result:
                result[console] += sales
            else:
                result[console] = sales
        return result
