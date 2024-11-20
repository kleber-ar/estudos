# Boas-vindas ao exercício Desafio técnico: Calendário Tryber

Chegou o momento em que você vai criar o próprio calendário da Trybe! 🚀

Nesse calendário, você vai poder adicionar feriados e compromissos, além de adicionar as tarefas que você precisa realizar!

Para isso, será necessário colocar em prática todos os seus conhecimento de HTML, CSS e JavaScript.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar seu exercício, você deverá criar um *Pull Request* neste repositório.

  Lembre-se de que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/876a615b-f578-4d65-a820-de9f3e5e57db/lesson/be8632bf-7bb7-4c01-a5d9-7aadac3a58f0) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
<br />

Desafio técnico: Calendário Tryber

Você desenvolverá um calendário semelhante ao da imagem a seguir.

![Resultado esperado](images/resultado.gif)

O projeto já tem os arquivos `.html` e `.css` inicias. Fique à vontade para soltar a criatividade e alterar o arquivo `.css` como desejar!

O objetivo deste desafio é colocar em prática o que você estudou a respeito de DOM, seletores, manipulação de elementos HTML e Eventos em JavaScript. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido no arquivo `scripts.js`. Não altere o conteúdo do arquivo `index.html`.

</details>

<br />

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório.

- Use o comando: `git clone git@github.com:tryber/sd-034-exercise-tryber-calendar.git`
- Entre na pasta do repositório que você acabou de clonar
  - `cd sd-034-exercise-tryber-calendar`

2. Instale as dependências e inicialize o projeto.

- Instale as dependências
  - `npm install`

3. Crie uma branch a partir da branch `main`.

- Verifique se você está na branch `main`
  - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora, crie uma branch à qual você vai submeter os `commits` de seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
  - Exemplo: `git checkout -b maria-soares-exercise-tryber-calendar`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver.

- Verifique se você está na raiz do projeto
  - Exemplo: `pwd` -> o retorno vai ser algo do tipo _/Users/maria/code/**sd-034-exercise-tryber-calendar**_
- Crie os arquivos index.html e style.css
  - Exemplo: `touch index.html style.css`

5. Adicione as mudanças ao *stage* do Git e faça um `commit`.

- Verifique se as mudanças ainda não estão no *stage*
  - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
- Adicione o novo arquivo ao *stage* do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - *que estavam em vermelho* - ao stage do Git)
    - `git status` (devem aparecer listados os arquivos em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem do tipo *nothing to commit* )

6. Adicione sua branch com o novo `commit` ao repositório remoto.

- Usando o exemplo anterior: `git push -u origin maria-soares-exercise-tryber-calendar`

7. Crie um `Pull Request` *(PR)*.

- Vá até a página de *Pull Requests* do [repositório no GitHub](https://github.com/tryber/sd-034-exercise-tryber-calendar/pulls)
- Clique no botão verde *"New pull request"*
- Clique na caixa de seleção *"Compare"* e escolha sua branch **com atenção** - Coloque um título em seu *Pull Request*
  - Exemplo: *"Cria tela de busca"*
- Clique no botão verde *"Create pull request"*

- Adicione uma descrição para o *Pull Request*, um título nítido que o identifique, e clique no botão verde *"Create pull request"*

 <img width="1335" alt="Exemplo de pull request" src="https://user-images.githubusercontent.com/42356399/166255109-b95e6eb4-2503-45e5-8fb3-cf7caa0436e5.png">

- Volte até a [página de *Pull Requests* do repositório](https://github.com/tryber/sd-034-exercise-tryber-calendar/pulls) e confira se seu *Pull Request* está criado

</details>
<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente, pois, assim, você garante visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho :);
- Lembre-se sempre de atualizar o repositório remoto após um (ou alguns) `commits`;
- Os comandos que você utilizará com mais frequência são:

1. `git status` *(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)*;

2. `git add` *(para adicionar arquivos ao stage do Git)*;

3. `git commit` *(para criar um commit com os arquivos que estão no stage do Git)*;

4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez em que fizer o `push` de uma nova branch)_;

5. `git push` *(para enviar o commit para o repositório remoto após o passo anterior)*.

</details>

<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para revisar os *Pull Requests*.

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Após a solução dos exercícios, abra um PR em seu repositório forkado e, se quiser, mergeie para a `main`. Fique à vontade!

**Atenção!**: Ao criar o PR, você vai se deparar com esta tela:

![PR do exercício](images/examplepr.png)

É necessário realizar uma mudança. Para isso, clique no *base repository* como na imagem a seguir:

![Mudando a base do repositório](images/change-base.png)

Mude para seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo, a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST ao clicar no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<details>
  <summary><strong>🛠 Testes e Cypress</strong></summary><br />

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web. Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o Cypress localmente para verificar se seus requisitos estão passando. Para isso, execute um dos seguintes comandos:

1. Para executar os testes apenas no terminal:

```bash
npm test
```

2. Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos comandos acima, uma janela de navegador será aberta e, então, você poderá escolher o teste a ser executado (project.spec.js) ou escolher `Run all specs` para executar todos os testes.

Assista a [este vídeo](https://vimeo.com/539240375/a116a166b9) para verificar como rodar o Cypress localmente 😉🎙

- Siga este passo a passo para verificar os **detalhes da execução do avaliador**:

  - Na página de seu *Pull Request*, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_.

  - Na página que se abrirá, clique na linha _**"Cypress evaluator step"**_ .

  - Analise os resultados com base na mensagem _**"(Run Starting)"**_.

  - Caso tenha dúvidas, assista a [este vídeo](https://vimeo.com/420861252) ou poste sua dúvida no *Slack*.

⚠️ **O avaliador automático não avalia seu projeto necessariamente na ordem em que os requisitos aparecem no readme. Isso ocorre para fazer com que o processo de avaliação seja mais rápido. Então, não se assuste se isso acontecer, ok?**

- Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. *Esta é uma oportunidade para você exercitar sua criatividade e fazer experimentação com os conhecimentos adquiridos.*

O não cumprimento de um requisito, total ou parcialmente, impactará sua avaliação.

</details>

<br />

# Requisitos
## Exercício 1 – Crie um calendário dinamicamente

<details>
  <summary>
    O array <code>decemberDaysList</code> contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <code>ul</code>.
  </summary>

> **Observação 🔎**: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente domingo e segunda-feira.

```js
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
```

</details>

<details>
  <summary><strong>O que será testado:</strong></summary>

- A tag <code>ul</code> deve conter o `id` `'days'`. Obs.: essa tag já existe em seu arquivo de `HTML`, portanto você precisa apenas recuperá-la.
- Os dias devem estar contidos em uma tag `<li>`, e todos devem ter a classe `day`. Exemplo: `<li class="day">3</li>`.
- Os dias 24, 25 e 31 são feriados e, além da classe `day`, devem conter a classe `holiday`. Exemplo: `<li class="day holiday">24</li>`.
- Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe `day` e a classe `friday`. Exemplo: `<li class="day friday">4</li>`.

</details>

## Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe `"holiday"`

Adicione ao botão `"Feriados"` um evento de `"click"` que altere a cor de fundo dos dias que possuem a classe `"holiday"`.

> **Importante**: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar no botão "Feriados", a cor de fundo dos dias que possuem a classe "holiday" deve mudar.
- Ao clicar novamente no botão "Feriados", a cor de fundo dos dias que possuem a classe "holiday" deve voltar ao normal.

</details>

## Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras

Adicione ao botão `"Sexta-feira"` um evento de `"click"` e modifique o texto a ser exibido nos dias em que são sextas-feiras.

> **Importante**: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial e exibe os dias.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar no botão "Sexta-feira", o texto dos dias em que são sextas-feiras deve mudar. Esse texto pode ser o que você escolher, mas deve ser diferente do dia do mês.
- Ao clicar novamente no botão "Sexta-feira", o texto retorna ao normal.

</details>

## Exercício 4 – Implemente duas funções que criem um efeito de "zoom"

Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar para `30px` e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

> **De olho na dica 👀**: Você pode utilizar a propriedade [event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).
> **De olho na dica 👀**: O tamanho original do texto é `20px`.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao passar o mouse sobre um dia do calendário, o texto desse dia deve aumentar.
- Ao tirar o mouse sobre um dia do calendário, o texto desse dia deve retornar ao tamanho original.

</details>

---

# Exercícios bônus

## Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário

> **Como o calendário deve funcionar 👀**: A ideia é definir o que será feito em cada dia do mês de dezembro, de acordo com as tarefas que já existem em seu arquivo HTML. A pessoa deve clicar na tarefa que deseja atribuir a um dia específico e, em seguida, clicar no dia do mês. Desse modo, o dia selecionado deve ter a cor da tarefa correspondente.

- Adicione um evento que, ao clicar no elemento com a tag `<div>` referente à cor de sua tarefa, atribua a esse elemento a classe `selected`. Ou seja, quando sua tarefa apresentar a classe `selected`, ela estará selecionada.
- Em seguida, ao clicar em um dia do mês no calendário, atribua ao texto desse dia a cor da legenda da tarefa selecionada. Em seguida, ao clicar no mesmo dia, o texto deverá retornar à cor inicial `rgb(119,119,119)`.
- Ao clicar novamente no elemento com a tag `<div>`, sua classe deverá voltar a ser somente `task`. Ou seja, essa tarefa deixará de ser uma tarefa selecionada.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar em uma tarefa, ela deve ser selecionada.
- Ao clicar em uma tarefa com a classe `.task` e clicar em um dia do mês no calendário com a classe `.day`, atribua a esse dia a cor da legenda de sua tarefa selecionada.
- Ao clicar novamente no dia com a cor da legenda, sua cor deverá voltar à configuração inicial `rgb(119,119,119)`.
- Ao clicar novamente na tarefa, ela deve ser desmarcada.

</details>

## Exercício 6 – Adicionando compromissos a seu calendário

- Implemente uma função que será chamada ao clique do botão com o id `'btn-add'`. Essa função vai pegar o texto que se encontra no elemento com id `'task-input'` e adicioná-lo à lista com id `'task-list'`.
- Se nenhum caractere for inserido no campo com id `'task-input'`, a função deverá chamar um `alert` com uma mensagem de erro.
- Ao pressionar a tecla <kbd>Enter</kbd>, o evento também deverá ser disparado.

> **De olho na dica 👀**: Você pode utilizar a propriedade [key](https://www.w3schools.com/JSREF/event_key_key.asp).

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar no botão com id `'btn-add'`, com o texto `'25 - Natal'` na caixa de texto com id `'task-input'`, adiciona-se o item `'25 - Natal'` à lista com id `'task-list'`.
- Ao clicar no botão com id `'btn-add'`, sem nenhum caractere no campo com id `'task-input'`, a função deve chamar um `alert` com uma mensagem.
- Ao pressionar a tecla Enter, com o texto `'25 - Natal'` na caixa de texto com id `'task-input'`, adiciona-se o item `'25 - Natal'` à lista com id `'task-list'`.

</details>
