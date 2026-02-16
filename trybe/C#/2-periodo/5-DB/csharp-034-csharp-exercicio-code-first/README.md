# Code First

Boas-vindas ao repositório do exercício `Code First`

Para realizar o exercício, atente-se a cada passo descrito a seguir e se tiver **qualquer dúvida**, nos envie no _Slack_ da turma! #vqv 🚀

Aqui, você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

## Entregáveis

<details>
<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

Para entregar o seu exercício, você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>
  
<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary>

Vamos fazer um exercício que vai deixar nítido a criação prática de models e contexts para bancos de dados utillizando o Entity Framework. Para facilitar no uso do banco de dados, iremos utilizar uma instância do SQLite ao invés do SQL Server. Com isso, você terá contexto de banco de dados também utilizado no Entity Framework mas não se preocupe, pois a lógica para a conexão com esse banco já está pronta.

</details>
  
<details>
  <summary><strong>:memo: Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

- Criar models no Entity Framework
- Relacionar as models aos contexts de conexão.
- Fazer uso do banco de dados em um programa console.

</details>

## Orientações
  
<details>

   <summary><strong>‼ Antes de começar a desenvolver </strong></summary>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/csharp-0x-exercicio-Code-First.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd acc-csharp-0x-exercises-Code-First`

  2. Instale as dependências
  
  - Entre na pasta `src/`.
  - Execute o comando: `dotnet restore`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique se você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-csharp-0x-exercicio-Code-First`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo essa: _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-csharp-0x-exercicio-Code-First`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/csharp-0x-exercicio-<code-first>`/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/csharp-0x-exercicio-<code-first>`/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>

<summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

- Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se sempre de, após um (ou alguns) `commits`, atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>


<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br/>

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-034-csharp`.

  Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
<summary><strong>🎛 Linter</strong></summary>

  Usaremos o [NetAnalyzer](https://docs.microsoft.com/pt-br/dotnet/fundamentals/code-analysis/overview) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `.csproj`.

  O analisador já é instalado pelo plugin da `Microsoft C#` no `VSCode`. Para isso, basta fazer o download do [plugin](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) e instalá-lo.

</details>
  
<details>
<summary><strong>🛠 Testes</strong></summary>
 O .NET já possui sua própria plataforma de testes.
  
  Este projeto já vem configurado e com suas dependências.

  ### Executando todos os testes

  Para executar os testes com o .NET, execute o comando dentro do diretório do seu projeto `src/code-first` ou de seus testes `src/code-first.Test.Test`!

  ```
  dotnet test
  ```

  ### Executando um teste específico

  Para executar um teste específico, basta executar o comando `dotnet test --filter Name~TestMethod1`.

  :warning: **Importante:** o comando irá executar testes cujo nome contém `TestMethod1`.

  :warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

  ### Outras opções para testes
  - Algumas opções que podem lhe ajudar são:
    -  `-?|-h|--help`: exibe a descrição completa de como utilizar o comando.
    -  `-t|--list-tests`: lista todos os testes, ao invés de executá-los.
    -  `-v|--verbosity <LEVEL>`: define o nível de detalhe na resposta dos testes.
      - `q | quiet`
      - `m | minimal`
      - `n | normal`
      - `d | detailed`
      - `diag | diagnostic`
      - Exemplo de uso: 
         ```
           dotnet test -v diag
         ```
         ou
         ```            
           dotnet test --verbosity=diagnostic
</details>

## Requisitos

Dica: Você pode usar a extensão [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) no VsCode para abrir o Market.db de forma visual no explorador de arquivos.

### 1. Faça o mapeamento das entidades

<details>

<summary> Crie as entidades <code>Product</code> e <code>Category</code> de forma a mapear seus atributos a colunas no banco de dados
</summary>

Utilize as convenções do Entity Framework Core para realizar este requisito.

`Product` e `Category` devem fazer parte do _namespace_ `code_first.Models`.

`Product` deve conter as seguintes propriedades:
- Uma chave primária.
- Uma propriedade de navegação para `Category` de nome `Category`.
- Uma propriedade `Name` do tipo `string`.
- Uma chave estrangeira para `Category` de nome `CategoryId`.

`Category` deve conter os seguintes atributos:
- Uma chave primária.
- Uma propriedade de navegação para `Product` de nome `Products`.
- Uma propriedade `Name` do tipo `string`.

**O que será testado:**

- Será testado que suas models foram criadas corretamente utilizando um context.

</details>



### 2 - Configure o Contexto

<details>
  <summary><code>MarketContext</code> deve ser capaz de criar as tabelas <code>Categories</code> e <code>Products</code></summary><br />

Utilize os conhecimentos adquiridos durante a lição para mapear os models `Category` e `Products` para tabelas de nomes `Categories` e `Products`, respectivamente.

> De olho na dica👀: O `MarketContext` já está configurado para utilizar SQLite, que é um tipo de banco de dados simples em que não é preciso criar um servidor, basta um arquivo `.db`.
> O arquivo utilizado será o `market.db`, que será criado sempre que o banco de dados for executado.
> Para que o projeto seja avaliado corretamente, não modifique o método `OnConfiguring` de `MarketContext`.


**O que será testado:**

- Será testado que o contexto consegue identificar as models.

</details>

### 3 - Crie o banco de dados

<details>
  <summary>Utilize os Models e o Context criados anteriormente para criar um banco de dados</summary><br />
  
No arquivo `Program.cs`, utilize o Context para criar um banco de dados SQLite no arquivo `market.db` e inserir um produto e uma categoria nas tabelas `Categories` e `Products`.

**O que será testado:**

- Será testado que as operações do banco de dados foram realizadas no seu método `main`.

</details>

<details>
<summary><strong> 🗣 Nos dê feedbacks sobre o exercício!</strong></summary>

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o [formulário](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH34-CSHARP&template=betrybe/csharp-0x-exercicio-code-first).
**Leva menos de 3 minutos!**

</details>

---

<!-- mdi versão 1.0 exercício como projeto ⚠️ não exclua esse comentário -->
