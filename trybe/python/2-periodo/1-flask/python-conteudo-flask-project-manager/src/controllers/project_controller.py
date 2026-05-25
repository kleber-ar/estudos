from flask import Blueprint, render_template, request, redirect
# ...

# def _get_project_or_task(id):
#     project = ProjectModel.find(id)
#     return [task.to_dict() for task in project]


def _format_date(date):
    splited = date.split('-')
    splited.reverse()
    return '/'.join(splited)


def _save_task(req, id_projeto, nome_projeto):
    deadline = {
        'idProjeto': int(id_projeto),
        'nome': nome_projeto,
        'atividade': req.get('nome'),
        'status': req.get('status'),
        'completionPercentage': req.get('percentage'),
        'descriptionTask': req.get('description'),
        'deadline': _format_date(req.get('deadline')),
        'responsible': req.get('responsible')
    }
    task = ProjectModel(deadline)
    task.save()

# ...


@project_controller.route(
    "/task/<id_projeto>/form",
    methods=['GET', 'POST']
)
def new_task(id_projeto):
    if request.method == 'POST':
        project = _get_project_or_task(_project_id(id_projeto))
        _save_task(request.form, id_projeto, project[0]['nome'])
        return redirect("http://127.0.0.1:8000/", code=302)
    if id_projeto.isnumeric():
        return render_template('taskForm.html')
    return render_template('notFound.html'), 404
