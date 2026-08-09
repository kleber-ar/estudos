# Boas-vindas ao repositório do Kotlin Playground 2

Para realizar os exercícios, atente-se a cada passo descrito a seguir, e se tiver **qualquer dúvida** nos envie no _Slack_ da turma! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento dos seus exercícios a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

## Entregáveis

<details>
<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

⚠️ **É importante que os arquivos não tenham o nome alterado!** ⚠️

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
<summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

No seu time de desenvolvimento, você ficou responsável por implementar toda parte de POO de um sistema de gerenciamento de disciplinas de uma escola. Você pode utilizar tudo que aprendeu de POO ate aqui. Estas classes irão lhe ajudar a colocar em prática todo o conteúdo desta seção.

</details>

## Orientações

<details>
<summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

    * Use o comando: `git clone git@github.com:betrybe/sd-001-exercise-kotlin-playground-2.git`
    * Entre na pasta do repositório que você acabou de clonar:
        * `cd sd-001-exercise-kotlin-playground-2.git`

2. Crie uma branch a partir da branch `main`

    * Verifique que você está na branch `main`
        * Exemplo: `git branch`
    * Se não estiver, mude para a branch `main`
        * Exemplo: `git checkout main`
    * Crie uma branch à qual você vai submeter os `commits` de seu exercício
        * Você deve criar uma branch no seguinte formato: `nome-sobrenome-kotlin-playground-2`
        * Exemplo: `git checkout -b joaozinho-sauro-kotlin-playground-2`

3. Adicione as mudanças ao _stage_ do Git e faça um `commit`

    * Verifique se as mudanças ainda não estão no _stage_
        * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
    * Adicione o novo arquivo ao _stage_ do Git
        * Exemplo:
            * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
            * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
    * Faça o `commit` inicial
        * Exemplo:
            * `git commit -m 'Iniciando o exercício. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
            * `git status` (deve aparecer uma mensagem tipo _nothing to commit_)

4. Adicione a sua branch com o novo `commit` ao repositório remoto

    * Usando o exemplo anterior: `git push -u origin joaozinho-sauro-kotlin-playground-2`

5. Crie um novo `Pull Request` _(PR)_

    * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/sd-001-exercise-kotlin-playground-2/pulls)
    * Clique no botão verde _"New pull request"_
    * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Adicione uma descrição para o Pull Request, um título que o identifique, e clique no botão verde "Create pull request". Crie da seguinte forma: `[JOAOZINHO] Kotlin Playground 2`
    * Adicione uma descrição para o Pull Request, um título nítido que o identifique, e clique no botão verde _"Create pull request"_
    * **Não se preocupe em preencher mais nada por enquanto!**
    * Volte até a [página de _Pull Requests_ do repositório](https://github.com/betrybe/sd-001-exercise-kotlin-playground-2/pulls) e confira se o seu _Pull Request_ está criado

</details>

<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

* Faça `commits` das alterações que você fizer no código regularmente pois assim você treina essa prática para o mercado de trabalho 😄. Nossa sugestão é pelo menos um commit por requisito;

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

* Os comandos que você utilizará com mais frequência são:

    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_

    2. `git add` _(para adicionar arquivos ao stage do Git)_

    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_

    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary>
<strong>🏗 Como estruturar seu exercício</strong>
  </summary> <br />

Crie todas as classes que você precisa no diretório `src` dentro do pacote `com.betrybe.playground`. Para cada classe, interface ou enum que você criar, será necessário nomear o arquivo de acordo com o nome específico indicado no *readme* de cada requisito.

</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />
Todos os requisitos do exercício serão testados automaticamente por meio do JUnit.

Para rodar o avaliador automático localmente no seu exercício, execute um dos comandos abaixo:

Para executar todos os testes utilize:

```bash
./gradlew test
```

**ou**:

```bash
./gradlew test --tests NomeDoArquivoTest
```

* Os requisitos do seu exercício são avaliados automaticamente

Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**:

* Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

* Na página que se abrirá, procure pela linha _**"Evaluator step"**_ e clique nela;

* Caso tenha dúvidas, poste no _Slack_.

:warning: **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

:warning: **Leia todos os requisitos atentamente e siga à risca o que for pedido. Não altere o nome de nenhuma classe** :warning:

# Requisitos

## 1 - Crie uma Enum Class chamada `PeriodEnum`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie um enum chamado `PeriodEnum` que contém as seguintes entradas:
  - MORNING
  - AFTERNOON
  - NIGHT

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se o enum foi criado com o nome correto dentro do pacote correto;
* Será testado se o enum possui os valores `MORNING`, `AFTERNOON` e `NIGHT`;

</details>

## 2 - Crie uma interface chamada `Olympic`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma interface chamada `Olympic` que indica quando uma disciplina é olímpica. A interface deve possuir dois métodos chamados `extraClasses` e `competition`, ambos retornando uma `String`.

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a interface foi criada com o nome correto dentro do pacote correto;
* Será testado se a interface possui a função `extraClasses` que retorna uma `String`;
* Será testado se a interface possui a função `competition` que retorna uma `String`;

</details>

## 3 - Crie uma classe chamada `Discipline`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `Discipline` que representa uma disciplina ofertada na escola. Ela deve ter os seguintes atributos:
  - `name` do tipo `String`
  - `code` do tipo `Int`

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `code` do tipo `Int`;

</details>

## 4 - Crie uma classe chamada `Person`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `Person` que representa uma pessoa no sistema. Ela deve ter os seguintes atributos:
  - `name` do tipo `String`
  - `age` do tipo `Int`
  - `email` do tipo `String`

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `age` do tipo `Int`;
* Será testado se a classe possui o atributo `email` do tipo `String`;

</details>

## 5 - Crie uma classe chamada `Collaborator`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `Collaborator` que representa uma pessoa que trabalha na escola dentro do sistema. Essa classe deve realizar herança da classe `Person` e deve ter os seguintes atributos:
  - Todos os atributos da classe herdada.
  - `functionId` do tipo `Int`

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `age` do tipo `Int`;
* Será testado se a classe possui o atributo `email` do tipo `String`;
* Será testado se a classe possui o atributo `functionId` do tipo `Int`;
* Será testado se a classe faz herança com a classe `Person`;

</details>

## 6 - Crie uma classe chamada `Teacher`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `Teacher` que representa uma pessoa que trabalha ministrando aulas na escola. Essa classe deve realizar herança da classe `Collaborator` e deve ter os seguintes atributos:
  - Todos os atributos da classe herdada.
  - `subjects` do tipo `List<Discipline>`
  - `period` do tipo `PeriodEnum`

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `age` do tipo `Int`;
* Será testado se a classe possui o atributo `email` do tipo `String`;
* Será testado se a classe possui o atributo `functionId` do tipo `Int`;
* Será testado se a classe possui o atributo `subjects` do tipo `List<Discipline>`;
* Será testado se a classe possui o atributo `period` do tipo `PeriodEnum`;
* Será testado se a classe faz herança com a classe `Collaborator`;

</details>

## 7 - Crie uma classe chamada `Director`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `Director` que representa uma pessoa que trabalha na direção da escola. Essa classe deve realizar herança da classe `Collaborator` e deve ter os seguintes atributos:
  - Todos os atributos da classe herdada.
  - `startTime` do tipo `String`
  - `endTime` do tipo `String`

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `age` do tipo `Int`;
* Será testado se a classe possui o atributo `email` do tipo `String`;
* Será testado se a classe possui o atributo `functionId` do tipo `Int`;
* Será testado se a classe possui o atributo `startTime` do tipo `String`;
* Será testado se a classe possui o atributo `endTime` do tipo `String`;
* Será testado se a classe faz herança com a classe `Collaborator`;

</details>

## 8 - Crie uma classe chamada `Student`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `Student` que representa uma pessoa que estuda na escola. Essa classe deve realizar herança da classe `Person` e deve ter os seguintes atributos:
  - Todos os atributos da classe herdada.
  - `enrollmentNumber` do tipo `Int`
  - `subjects` do tipo `List<Discipline>`
  - `academicPeriod` do tipo `PeriodEnum`

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `age` do tipo `Int`;
* Será testado se a classe possui o atributo `email` do tipo `String`;
* Será testado se a classe possui o atributo `enrollmentNumber` do tipo `Int`;
* Será testado se a classe possui o atributo `subjects` do tipo `List<Discipline>`;
* Será testado se a classe possui o atributo `academicPeriod` do tipo `PeriodEnum`;
* Será testado se a classe faz herança com a classe `Person`;

</details>

## 9 - Crie uma classe chamada `OlympicDiscipline`

<details>

<summary>Detalhes 🔍 </summary>
</br>

* Crie uma classe chamada `OlympicDiscipline` que representa uma disciplina que é olímpica. Essa classe deve realizar herança da classe `Discipline`, implementar a interface `Olympic` e deve ter os seguintes atributos:
  - Todos os atributos da classe herdada.
  - Todas as funções da interface implementada.

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* Será testado se a classe foi criada com o nome correto dentro do pacote correto;
* Será testado se a classe possui o atributo `name` do tipo `String`;
* Será testado se a classe possui o atributo `code` do tipo `Int`;
* Será testado se a classe faz herança com a classe `Discipline`;
* Será testado se a classe implementa a interface `Olympic`;

</details>

