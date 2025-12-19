# Paint Shop

Boas-vindas ao repositório do exercício `Paint Shop`

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

Neste exercício você vai criar classes e classes estáticas Você irá praticar todos os conceitos de O.O que você aprendeu até aqui.

</details>
  
<details>
  <summary><strong>:memo: Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

- Entender a Orientação a Objetos.
- Desenvolver classes.
- Utilizar de maneira correta, os objetos instanciados a partir das classes.
- Implementar construtores.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/csharp-001-exercicio-paint-shop.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd csharp-001-exercicio-paint-shop`

  2. Instale as dependências

  - `dotnet restore`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora, crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-csharp-001-exercicio-paint-shop`

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
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-csharp-001-exercicio-paint-shop`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/csharp-001-exercicio-paint-shop`/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/csharp-001-exercicio-paint-shop`/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br/>

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se sempre, após um (ou alguns) `commits`, de atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [NetAnalyzer](https://docs.microsoft.com/pt-br/dotnet/fundamentals/code-analysis/overview) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `main.yml`.

  O analisador já é instalado pelo plugin da `Microsoft C#` no `VSCode`. Para isso, basta fazer o download do [plugin](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) e instalá-lo.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  O .NET já possui sua própria plataforma de testes.
  
  Este projeto já vem configurado e com suas dependências.

  ### Executando todos os testes

  Para executar os testes com o .NET, execute o comando dentro do diretório do seu projeto `src/<project>`!

  ```
  dotnet test
  ```

  ### Executando um teste específico

  Para executar um teste expecífico, basta executar o comando `dotnet test --filter Name~TestMethod1`.

  :warning: **Importante:** o comando irá executar testes cujo nome contêm `TestMethod1`.

  :warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

  ### Outras opções para testes
  - Algumas opções que podem lhe ajudar são:
    -  `-?|-h|--help`: exibem a descrição completa de como utilizar o comando.
    -  `-t|--list-tests`: lista todos os testes ao invés de executá-los.
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
         ``` 
</details>

# Requisitos

Vamos supor que uma loja de materiais de construção tenha recebido diversas reclamações de clientes sobre não saber quanta tinta comprar pra pintar suas casas.

- Algumas pessoas compram tinta demais e ficam com latas de tinta sobrando após a reforma.
- Outras pessoas são o contrário. Acabam precisando fazer mais de uma viagem pra comprar mais tinta porque a quantidade comprada anteriormente não deu conta do recado.

Pensando em resolver esse problema, essa loja resolveu contratar uma pessoa desenvolvedora para criar uma biblioteca de classes utilitárias que possa ser importada para o sistema atual da loja, desenvolvido em C#.

![tintas espalhadas](./img/headpainters.gif)
  
> Aviso ⚠️: Antes de começar, certifique-se de que todas as classes e métodos serão criados nos respectivos arquivos, já presentes no projeto. Também se certifique de que todas as classes, propriedades, métodos e construtores são **públicos** (ou seja, possuem o modificador `public` antes da declaração), caso contrário os testes automatizados irão falhar.


## Requisitos:

## 1. Crie uma classe `Wall`

Essa classe será responsável por representar as paredes!

<details>
  <summary>A classe <code>Wall</code> <strong>não</strong> deve ser estática</summary><br />
  
  A paredes representam objetos distintos e instanciáveis

</details>

<details>
  <summary>A classe <code>Wall</code> deve possuir uma propriedade pública <code>Width</code> do tipo double com um <code>get</code> implícito e um <code>set</code> explícito</summary>

  A propriedade `Width` representa a largura da parede.

  O método `set` da propriedade `Width` deve armazenar o valor recebido caso o mesmo seja maior do que `0`. Se o valor for menor ou igual a `0`, o valor armazenado deverá ser `1`

</details>

<details>
  <summary>A classe <code>Wall</code> deve possuir uma propriedade pública <code>Height</code> do tipo double com um <code>get</code> implícito e um <code>set</code> explícito</summary>

  A propriedade `Height` representa a altura da parede.

  O método `set` da propriedade `Height` deve armazenar o valor recebido caso o mesmo seja maior do que `0`. Se o valor for menor ou igual a `0`, o valor armazenado deverá ser `1`

</details>

<details>
  <summary>A classe <code>Wall</code> deve possuir uma propriedade pública <code>ExcludedArea</code> do tipo double com um <code>get</code> e <code>set</code> implícitos</summary>

  A propriedade `ExcludedArea` representa a área da parede que não será pintada, onde podem haver portas, janelas, etc.

</details>

<details>
  <summary>A classe <code>Wall</code> deve possuir uma propriedade pública <code>PaintableArea</code> do tipo double sem um <code>set</code> e com um <code>get</code> explícito</summary>

  A propriedade `PaintableArea` representa a área da parede que deverá ser pintada.

  O método `get` da propriedade `PaintableArea` deve retornar a área da parede a ser pintada, ou seja, representa a área total da parede menos a área que não deverá ser pintada.

</details>

<details>
  <summary>A classe <code>Wall</code> deve possuir um construtor que receba um <code>width</code> como primeiro parâmetro e um <code>height</code> como segundo parâmetro</summary><br />

  Esses parâmetros deverão atribuir os valores às propriedades `Width` e `Height` da classe Wall.

  **O que será testado:**

  Será testado que o software possui a classe implementada possui todos os atributos, construtor e modificador de acesso implementados de acordo com o solicitado no requisito.

</details>





## 2. Crie uma classe `Room`

Já temos as paredes, agora precisamos representar os cômodos!

<details>
  <summary>A classe <code>Room</code> <strong>não</strong> deve ser estática</summary><br />

Como as paredes, os cômodos também representam ambientes distintos e instanciáveis.

</details>

<details>
  <summary>A classe <code>Room</code> deve possuir uma propriedade pública <code>Walls</code> que seja um array de objetos do tipo <code>Wall</code> que criamos no requisito 2 (ou seja, um <code>Wall[]</code>). Essa propriedade não deve possuir um <code>set</code>.</summary><br />

Ao não atribuirmos um setter a essa propriedade, ela poderá ser atribuída apenas na inicialização, o que faz sentido, pois não deve ser possível alterar a quantidade de paredes de um cômodo sem que ele vire outro cômodo diferente.

</details>


<details>
  <summary>A classe <code>Room</code> deve possuir um construtor que receba um <code>Wall[]</code> e o atribua à propriedade <code>Walls</code></summary><br />

Ao criar um cômodo, iremos passar as de paredes que o irão compor e, a partir dessa informação, poderemos retornar o total da área a ser pintada para usar na classe de utilidades que criaremos a seguir.

> Dica: para essa classe, o ideal é utilizar a palavra-chave `params` no construtor, pois isso o permitirá receber um dos três inputs a seguir:
>
> - Uma sequência de argumentos do tipo `Wall` separados por vírgula, que será convertida em um `Wall[]` automaticamente sem que ele precise ser inicializado,
> - Um `Wall[]` inicializado previamente (o que seria o único comportamento aceito caso não se usasse o `params`).
> - Nenhum argumento. Nesse caso, teremos um `Wall[]` vazio sendo passado.
> 
> . Para saber mais, veja a documentação [aqui](https://docs.microsoft.com/pt-br/dotnet/csharp/language-reference/keywords/params).
  
</details>

<details>
  <summary>A classe <code>Room</code> deve possuir uma propriedade pública <code>TotalPaintableArea</code> do tipo <code>double</code> com um <code>get</code> explícito e sem um <code>set</code> que represente toda a superfície  a ser pintada</summary><br />

O método `get` da propriedade `TotalPaintableArea` deve calcular a soma de todas as áreas a serem pintadas de cada parede (`Wall`) contida no quarto (`Room`)
  

  **O que será testado:**

  Será testado que o software possui a classe implementada possui todos os atributos, construtor e modificador de acesso implementados de acordo com o solicitado no requisito.
  

</details>


## 3. Crie uma classe estática `PaintUtilities`

A classe `PaintUtilities` será nossa principal suite de métodos de utilidades!

<details>
  <summary>A classe <code>PaintUtilities</code> deve ser estática.</summary><br />

A classe não poderá ser instanciada em objetos, já que não representa uma abstração de um objeto real.  
</details>

<details>
  <summary>A classe <code>PaintUtilities</code> deve possuir uma propriedade pública <code>BucketSizeLiters</code> do tipo <code>int</code> com valor <code>20</code>. Essa propriedade armazena quantos litros de tinta possui um balde.</summary><br />

Lembre-se que todo membro da classe `PaintUtilities` deve ser estático. A atribuição do valor pode ser feita de forma direta ou por um construtor estático.
  
</details>

<details>
  <summary>A classe <code>PaintUtilities</code> deve possuir uma propriedade pública <code>SquareMetersPerLiter</code> do tipo <code>int</code> com valor <code>10</code>. Essa propriedade armazena quantos metros quadrados podem ser pintados por litro</summary><br />

Lembre-se que todo mebro da classe `PaintUtilities` deve ser estático. A atribuição do valor pode ser feita de forma direta ou por um construtor estático.
  
</details>

<details>
  <summary>A classe <code>PaintUtilities</code> deve possuir uma propriedade pública <code>SquareMetersPerBucket</code> do tipo <code>int</code> com um <code>get</code> explícito e sem um <code>set</code></summary><br />

O método `get` da propriedade `SquareMetersPerBucket` deve calcular a quantidade de metros quadrados que cada balde de tinta irá render utilizando os valores das propriedades BucketSizeLiters e SquareMetersPerLiter.
  
</details>

<details>
  <summary>A classe <code>PaintUtilities</code> deve possuir um método público <code>GetNeededPaintBuckets()</code> com três <code>overloads</code>: um que receba a área em m² com o tipo <code>double</code>, um que receba uma parede do tipo <code>Wall</code> e um que receba um cômodo do tipo <code>Room</code> e retorne a quantidade de tinta a ser usada em <strong>baldes</strong> como <code>int</code>.</summary><br />

O método `GetNeededPaintBuckets()` é o principal método da nossa classe de utilidades. Por isso, ele deve conseguir trabalhar tanto com o valor da área em si quanto com paredes e cômodos.

O valor deve ser retornado em baldes de tinta, não em litros. Para isso, *considere aceitável que ao final da pintura haja alguma sobra, contanto que essa sobra seja **menor que um balde inteiro***.

> Dica :pencil2::  um overload acontece quando declaramos o mesmo método mais de uma vez, mas com parâmetros diferentes em cada uma das declarações. Assim, podemos escolher que tipo de argumento queremos passar (ou se não queremos passar nenhum).
>
> Como a tipagem do C# é estática, o compilador irá saber qual das versões do método usar a partir da forma como o invocamos.
>
> Dica 2 :peincil2:: O método `Math.Ceiling()` do C# retorna o menor valor inteiro maior ou igual a um número com casas decimais. [Documentação](https://learn.microsoft.com/pt-br/dotnet/api/system.math.ceiling?view=net-6.0)
  
</details>

<details>
  <summary>A classe <code>PaintUtilities</code> deve possuir um método público <code>CalculateCost</code> com dois parâmetros. O preimeiro é o preço do balde de tinta, em formato <code>decimal</code>. O segundo será dividido em três <code>overloads</code> iguais ao do <code>GetNeededPaintBuckets()</code>: área (<code>double</code>), parede(<code>Wall</code>) ou cômodo (<code>Room</code>). Retorne o custo da tinta como <code>decimal</code>.</summary><br />

O método PaintUtilities deverá utilizar o método GetNeededPaintBuckets() para conseguir a quantidade de baldes a ser comprada e, com essa informação somada ao preço do balde passado no parâmetro, retornar o custo total da obra.

Utilize três overloads que façam uso dos três overloads de GetNeededPaintBuckets() que você criou anteriomente.

> Dica :pencil2::  um overload acontece quando declaramos o mesmo método mais de uma vez, mas com parâmetros diferentes em cada uma das declarações. Assim, podemos escolher que tipo de argumento queremos passar (ou se não queremos passar nenhum).
>
> Como a tipagem do C# é estática, o compilador irá saber qual das verões do método usar a partir da forma como invocamos o método.
  
  **O que será testado:**

  Será testado que o software possui a classe implementada possui todos os atributos, métodos construtor e modificadores de acesso implementados de acordo com o solicitado no requisito.
  

</details>

<details>
<summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary>

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/csharp-0x-exercicio-paint-shop)

</details>