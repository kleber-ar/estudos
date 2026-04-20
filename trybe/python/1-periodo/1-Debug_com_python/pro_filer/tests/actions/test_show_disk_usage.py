from pro_filer.actions.main_actions import show_disk_usage


def test_show_disk_usage_com_arquivos(tmp_path, capsys):
    # cria arquivos com tamanhos diferentes
    file1 = tmp_path / "file1.txt"
    file1.write_bytes(b"a" * 100)  # 100 bytes

    file2 = tmp_path / "file2.txt"
    file2.write_bytes(b"a" * 50)  # 50 bytes

    context = {
        "all_files": [str(file1), str(file2)]
    }

    show_disk_usage(context)
    captured = capsys.readouterr()

    # total correto
    assert "Total size: 150" in captured.out

    # arquivos aparecem
    assert "file1.txt" in captured.out
    assert "file2.txt" in captured.out


def test_show_disk_usage_ordem_decrescente(tmp_path, capsys):
    file1 = tmp_path / "big.txt"
    file1.write_bytes(b"a" * 200)

    file2 = tmp_path / "small.txt"
    file2.write_bytes(b"a" * 10)

    context = {
        "all_files": [str(file2), str(file1)]  # invertido de propósito
    }

    show_disk_usage(context)
    captured = capsys.readouterr()

    # big deve aparecer antes de small
    first_occurrence = captured.out.find("big.txt")
    second_occurrence = captured.out.find("small.txt")

    assert first_occurrence < second_occurrence


def test_show_disk_usage_percentual(tmp_path, capsys):
    file1 = tmp_path / "file1.txt"
    file1.write_bytes(b"a" * 100)

    file2 = tmp_path / "file2.txt"
    file2.write_bytes(b"a" * 100)

    context = {
        "all_files": [str(file1), str(file2)]
    }

    show_disk_usage(context)
    captured = capsys.readouterr()

    # cada um deve ter 50%
    assert "(50%)" in captured.out


def test_show_disk_usage_lista_vazia(capsys):
    context = {
        "all_files": []
    }

    show_disk_usage(context)
    captured = capsys.readouterr()

    assert "Total size: 0" in captured.out


def test_show_disk_usage_nao_zero(tmp_path, capsys):
    file1 = tmp_path / "file.txt"
    file1.write_bytes(b"a" * 10)

    context = {
        "all_files": [str(file1)]
    }

    show_disk_usage(context)
    captured = capsys.readouterr()

    # garante que não é tratado como 0
    assert "(0%)" not in captured.out
