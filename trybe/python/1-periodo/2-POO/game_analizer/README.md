# Task Manager

Este é um gerenciador de tarefas simples, onde você pode adicionar, listar, marcar como feito e remover tarefas.

## Como instalar

1. Clone esse repositório
2. Acesse a pasta do repositório clonado: `cd nome-do-diretório-clonado`
3. Crie um ambiente virtual com Python 3.8 ou superior: `python3 -m venv .venv`
4. Ative o ambiente virtual: `source .venv/bin/activate`
5. Instale o projeto e suas dependências: `pip install -r dev-requirements.txt`

## Como usar

### Command Line Interface (CLI)

Rode o comando `tsk` para iniciar a aplicação e a partir daí você verá o menu de opções.

### Web

Após instalar o projeto, você pode iniciar o servidor web com o comando:

```bash
python -m uvicorn task_manager.api:app
```

Utilize a flag `--reload` para que o servidor seja reiniciado a cada alteração no código.
