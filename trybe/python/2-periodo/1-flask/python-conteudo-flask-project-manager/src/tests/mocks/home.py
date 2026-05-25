project_cards = '<section class="project-home">'

project_titles = {
    1: "<h1>Aplicação Web para Gerenciamento de Tarefas</h1>",
    2: "<h1>Aplicativo móvel para rastreamento de exercícios físicos</h1>",
    3: "<h1>Sistema de gestão de vendas online</h1>"
}

unknown_page = {
    'title': '<h1>Not Found</h1>',
    'text': '<p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.</p>'
}


tasks = [
    {
        '_id': '649a1904b09fa8b1ed7eb443',
        'idProject': 1,
        'name': 'Aplicação Web para Gerenciamento de Tarefas',
        'task': 'Design de Interface do Usuário',
        'status': 'Concluído',
        'completionPercentage': 100,
        'descriptionTask': 'Criar o design visual do sistema,incluindo a definição de layouts,cores e elementos gráficos.',
        'deadline': '15/07/2023',
        'responsible': 'Pedro Santos'},
    {
        '_id': '649a1904b09fa8b1ed7eb444',
        'idProject': 1,
        'name': 'Aplicação Web para Gerenciamento de Tarefas',
        'task': 'Desenvolvimento do Backend',
        'status': 'Em progresso',
        'completionPercentage': 20,
        'descriptionTask': 'Implementar a lógica de negócio e a infraestrutura necessária para suportar as funcionalidades da aplicação.',
        'deadline': '30/08/2023',
        'responsible': 'João Oliveira'},
    {
        '_id': '649a1904b09fa8b1ed7eb445',
        'idProject': 1,
        'name': 'Aplicação Web para Gerenciamento de Tarefas',
        'task': 'Desenvolvimento do Frontend',
        'status': 'Em progresso',
        'completionPercentage': 10,
        'descriptionTask': ' Implementar as telas e a interação do usuário com o site,seguindo o design de interface',
        'deadline': '30/09/2023',
        'responsible': 'Maria Costa'},
    {
        '_id': '649a1904b09fa8b1ed7eb446',
        'idProject': 1,
        'name': 'Aplicação Web para Gerenciamento de Tarefas',
        'task': 'Testes de performance',
        'status': 'Não iniciado',
        'completionPercentage': 0,
        'descriptionTask': 'Realizar testes de funcionalidade,usabilidade e desempenho do aplicativo,e identificar eventuais bugs.',
        'deadline': '31/10/2023',
        'responsible': 'Ana Silva'}
]