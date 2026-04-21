from src.importer import GamesImporter
import pytest


def test_import_from_json_not_found():
    with pytest.raises(FileNotFoundError, match="Arquivo não encontrado!"):
        GamesImporter.load_games_from_json("fake_file.json")
