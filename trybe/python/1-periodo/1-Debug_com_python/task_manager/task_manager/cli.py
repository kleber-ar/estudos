from task_manager import services


def list_tasks(include_completed=True):
    all_tasks = services.get_tasks()
    if not include_completed:
        all_tasks = [task for task in all_tasks if not task["completed"]]

    print("> Tarefas:")
    for task in all_tasks:
        id_ = task["id"]
        name = task["name"]
        completed = "completa" if task["completed"] else "a fazer"
        print(f"  {id_} - {name} | ({completed})")


def create_task():
    name = input("? Digite o nome da tarefa: ")
    services.create_task(name)
    print("> Tarefa adicionada com sucesso!")


def complete_task():
    id_ = int(input("? Digite o ID da tarefa a ser completada: "))
    try:
        services.complete_task(id_)
        print("> Tarefa completada com sucesso!")
    except ValueError:
        print("> Tarefa não encontrada!")


def delete_task():
    id_ = int(input("? Digite o ID da tarefa a ser deletada: "))
    try:
        services.delete_task(id_)
        print("> Tarefa deletada com sucesso!")
    except ValueError:
        print("> Tarefa não encontrada!")


def get_options():
    return [
        ("Sair", exit),
        ("Adicionar tarefa", create_task),
        ("Completar tarefa", complete_task),
        ("Deletar tarefa", delete_task),
        ("Listar todas as tarefas", list_tasks),
        (
            "Listar tarefas pendentes",
            lambda: list_tasks(include_completed=False),
        ),
    ]


def main():
    while True:
        print("> Opções:")
        for index, option in enumerate(get_options()):
            print(f"  {index} - {option[0]}")

        selected_option = int(input("? Digite uma opção: "))
        try:
            option_function = get_options()[selected_option][1]
        except IndexError:
            print("> Opção inválida!")
        else:
            option_function()
        print()


if __name__ == "__main__":
    main()  # pragma: no cover
