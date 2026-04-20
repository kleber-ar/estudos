import pytest
from pro_filer.actions.main_actions import find_duplicate_files


def test_find_duplicate_files_com_duplicados(tmp_path):
    file1 = tmp_path / "file1.txt"
    file1.write_text("conteudo")

    file2 = tmp_path / "file2.txt"
    file2.write_text("conteudo")  # igual ao file1

    context = {
        "all_files": [str(file1), str(file2)]
    }

    result = find_duplicate_files(context)

    assert (str(file1), str(file2)) in result or (
        str(file2), str(file1)) in result


def test_find_duplicate_files_sem_duplicados(tmp_path):
    file1 = tmp_path / "file1.txt"
    file1.write_text("conteudo1")

    file2 = tmp_path / "file2.txt"
    file2.write_text("conteudo2")

    context = {
        "all_files": [str(file1), str(file2)]
    }

    result = find_duplicate_files(context)

    assert result == []


def test_find_duplicate_files_multiplos_duplicados(tmp_path):
    file1 = tmp_path / "file1.txt"
    file1.write_text("same")

    file2 = tmp_path / "file2.txt"
    file2.write_text("same")

    file3 = tmp_path / "file3.txt"
    file3.write_text("same")

    context = {
        "all_files": [str(file1), str(file2), str(file3)]
    }

    result = find_duplicate_files(context)

    # 3 arquivos iguais → 3 combinações
    assert len(result) == 3


def test_find_duplicate_files_arquivo_inexistente(tmp_path):
    file1 = tmp_path / "file1.txt"
    file1.write_text("conteudo")

    fake_file = tmp_path / "nao_existe.txt"

    context = {
        "all_files": [str(file1), str(fake_file)]
    }

    with pytest.raises(ValueError):
        find_duplicate_files(context)
