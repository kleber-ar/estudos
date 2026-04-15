import pytest

# configuração do Mock do db pra sempre ficar vazio.
# O autouse=True é para sempre ser usado o Mock nos testes


@pytest.fixture(autouse=True)
def patch_db_path(tmp_path, monkeypatch):
    mock_db_path = tmp_path / "database.json"
    mock_db_path.touch()
    monkeypatch.setattr("task_manager.database.DATABASE_PATH", mock_db_path)
