from pro_filer.actions.main_actions import show_preview


def test_show_preview_com_dados(capsys):
    context = {
        "all_files": [
            "file1.py",
            "file2.py",
            "file3.py",
        ],
        "all_dirs": [
            "dir1",
            "dir2",
        ],
    }

    show_preview(context)
    captured = capsys.readouterr()

    assert "Found 3 files and 2 directories" in captured.out
    assert "First 5 files:" in captured.out
    assert "First 5 directories:" in captured.out


def test_show_preview_lista_vazia(capsys):
    context = {
        "all_files": [],
        "all_dirs": [],
    }

    show_preview(context)
    captured = capsys.readouterr()

    assert "Found 0 files and 0 directories" in captured.out
    assert "First 5 files" not in captured.out
    assert "First 5 directories" not in captured.out


def test_show_preview_limite_5(capsys):
    context = {
        "all_files": [f"file{i}.py" for i in range(10)],
        "all_dirs": [f"dir{i}" for i in range(10)],
    }

    show_preview(context)
    captured = capsys.readouterr()

    # verifica se só aparecem 5
    assert "file5.py" not in captured.out
    assert "dir5" not in captured.out


def test_show_preview_mostra_conteudo(capsys):
    context = {
        "all_files": ["a.py", "b.py"],
        "all_dirs": ["dirA"],
    }

    show_preview(context)
    captured = capsys.readouterr()

    assert "['a.py', 'b.py']" in captured.out
    assert "['dirA']" in captured.out
