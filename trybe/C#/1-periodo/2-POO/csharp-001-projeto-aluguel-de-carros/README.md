# Aluguel de Carros

Boas-vindas ao repositório do projeto `Aluguel de Carros`

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver **qualquer dúvida**, nos envie no _Slack_ da turma! #vqv 🚀

Aqui, você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

## Entregáveis

<details>
<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>
  
<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary>

Você deverá construir uma aplicação do tipo Console com a capacidade de realizar diversas operações básicas de um sistema de aluguel de carros. Essa aplicação controlará diversos tipos de veículos, status de locações além dos processos de locar um veículo ou cancelar uma locação.

</details>
  
<details>
  <summary><strong>:memo: Habilidades a serem trabalhadas </strong></summary>

Neste projeto, verificamos se você é capaz de:

- Aplicar programação orientada a objetos
- Desenvolver de classes
- Instanciar objetos e utilizar classes de maneira correta
- Utilizar tipos avançados.

</details>


## Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/csharp-001-projeto-aluguel-de-carros.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd csharp-001-projeto-aluguel-de-carros`

  2. Instale as dependências
  
  - Entre na pasta `src/`.
  - Execute o comando: `dotnet restore`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique se você está na branch `master`.
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`.
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto.
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-csharp-001-projeto-aluguel-de-carros`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_.
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git.
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial.
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo essa: _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-csharp-001-projeto-aluguel-de-carros`.

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/csharp-001-projeto-aluguel-de-carros/pulls).
  - Clique no botão verde _"New pull request"_.
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**.
  - Coloque um título para a sua _Pull Request_.
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_.
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_.
  - **Não se preocupe em preencher mais nada por enquanto!**.
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/csharp-001-projeto-aluguel-de-carros/pulls) e confira que o seu _Pull Request_ está criado.

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br/>

  - Faça `commits` das alterações que você fizer no código regularmente.

  - Lembre-se sempre, após um (ou alguns) `commits`, de atualizar o repositório remoto.

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

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [NetAnalyzer](https://docs.microsoft.com/pt-br/dotnet/fundamentals/code-analysis/overview) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `.csproj`.

  O analisador já é instalado pelo plugin da `Microsoft C#` no `VSCode`. Para isso, basta fazer o download do [plugin](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) e instalá-lo.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  O .NET já possui sua própria plataforma de testes.
  
  Este projeto já vem configurado e com suas dependências.

  ### Executando todos os testes

  Para executar os testes com o .NET, execute o comando dentro do diretório do seu projeto `src/`!

  ```
  dotnet test
  ```

  ### Executando um teste específico

  Para executar um teste expecífico, basta executar o comando `dotnet test --filter Name~TestMethod1`.

  :warning: **Importante:** o comando irá executar testes cujo nome contém `TestMethod1`.

  :warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

  ### Outras opções para testes
  - Algumas opções que podem lhe ajudar são:
    -  `-?|-h|--help`: exibem a descrição completa de como utilizar o comando.
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
         ``` 
</details>

# Requisitos do Projeto

A empresa do coração em que você trabalha está desenvolvendo um sistema para controlar o aluguel de carros, e você foi o primeiro contratado para iniciar o desenvolvimento do sistema.

O `Rent Cars` está dividido em partes orgainzadas. Em `Model` você vai encontrar as classes bases que devem seguir a seguinte hierarquia:

- `Vehicle.cs` descreve uma classe **abstrata** base para os veículos.
  - `Car.cs` descreve uma classe derivada para **carros**.
  - `Truck.cs` descreve uma classe derivada para **caminhões**.
  - `Motorcycle.cs` descreve uma classe derivada para **motos**.

- `Person.cs` descreve uma classe **abstrata** base para as pessoas clientes do sistema.
  - `PhysicalPerson.cs` descreve uma classe derivada para **pessoas físicas**.
  - `LegalPerson.cs` descreve uma classe derivada para **pessoas jurídicas**.

- `Rent.cs` descreve a classe para um aluguel entre uma **pessoa** e um **veículo**.

## 1. Crie uma `Struct` para as **Cores**

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Types/Structs/Color.cs

**O que será testado:**

 - A struct deve conter o campo <code>Name</code> do tipo <code>string</code>
 - A struct deve conter o campo <code>Hex</code> do tipo <code>string</code>
 - Os atributos devem ser públicos.

</details>

## 2. Crie um enum `FuelType`
<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Types/Enums/FuelType.cs

**O que será testado:**

  - O enum deve conter o campo <code>Alcohol</code> com valor 10
  - O enum deve conter o campo <code>Gasoline</code> com valor 20
  - O enum deve conter o campo <code>Flex</code> com valor 30
  - O enum deve conter o campo <code>Diesel</code> com valor 40
  - O enum deve conter o campo <code>Electric</code> com valor 50
  - O enum deve conter o campo <code>Hybrid</code> com valor 60


</details>

## 3. Crie a classe `Vehicle`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Models/Vehicle.cs

A classe deve conter os campos comuns à um veículo.

**O que será testado:**

- A classe deve ter as seguintes propriedades:
  - <code>Brand</code> que deve ser do tipo <code>string</code>, ter valor padrão igual à "", deve ter get e set;
  - <code>Model</code> que deve ser do tipo <code>string</code>, ter valor padrão igual à "", deve ter get e set;
  - <code>Price</code> que deve ser do tipo <code>decimal</code>, deve ter get e  set;
  - <code>Fuel</code> que deve ser do tipo <code>FuelType</code>, deve ter get e set;
  - <code>EngineCapacity</code> que deve ser do tipo <code>int</code>, deve ter get e set;
  - <code>MainColor</code> que deve ser do tipo <code>Color</code>, deve ter get e set;
  - <code>Year</code> que deve ser do tipo <code>int</code>, deve ter get e set;
  - <code>PricePerDay</code> que deve ser do tipo <code>double</code>, deve ter get e set;
  - <code>IsRented</code> que deve ser do tipo <code>bool</code>, ter valor padrão igual à false, deve ter get e set;

</details>

## 4. Crie um enum `BrakeType`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Types/Enums/BreakeType.cs

**O que será testado:**

  - O enum deve conter o campo <code>Chamber</code> com valor 1
  - O enum deve conter o campo <code>Disc</code> com valor 2
  - O enum deve conter o campo <code>Drum</code> com valor 3

</details>

## 5. Crie um enum `TractionType`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Types/Enums/TractionType.cs

**O que será testado:**

  - O enum deve conter o campo <code>FrontWheelDrive</code> com valor 0
  - O enum deve conter o campo <code>RearWheelDrive</code> com valor 1
  - O enum deve conter o campo <code>AllWheelDrive</code> com valor 2

</details>

## 6. Faça a classe `Car` herdar de `Vehicle`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Models/Car.cs

Adicione a herança da classe Vehicle
Adicione novos campos específicos de Car

**O que será testado:**

- A classe deve ter as seguintes propriedades:
  - <code>Seats</code> que deve ser do tipo <code>Int</code>;
  - <code>Doors</code> que deve ser do tipo <code>Int</code>;
  - <code>Traction</code> que deve ser do tipo <code>TractionType</code>;
  - <code>FrontBrake</code> que deve ser do tipo <code>BrakeType</code>;
  - <code>RearBrake</code> que deve ser do tipo <code>BrakeType</code>;

</details>

## 7. Faça a classe `Motorcycle` herdar de `Vehicle`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Models/Motorcycle.cs

Adicione a herança da classe Vehicle

Adicione novos campos específicos de Motorcycle

**O que será testado:**

- A classe deve ter as seguintes propriedades:
  - <code>SeatHeight</code> que deve ser do tipo <code>double</code>;
  - <code>FrontBrake</code> que deve ser do tipo <code>BrakeType</code>;
  - <code>RearBrake</code> que deve ser do tipo <code>BrakeType</code>;

</details>

## 8. Faça a classe `PickupTruck` herdar de `Car`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Models/PickupTruck.cs

Adicione a herança da classe Vehicle

Adicione novos campos específicos de PickupTruck

**O que será testado:**
- A classe deve ter as seguintes propriedades:
  - <code>LoadCapacity</code> que deve ser do tipo <code>double</code>;
</details>


## 9. Crie um enum `RentStatus`

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Types/Enums/RentStatus.cs

**O que será testado:**
  - O enum deve conter o campo <code>Confirmed</code> com valor 0
  - O enum deve conter o campo <code>Finished</code> com valor 1
  - O enum deve conter o campo <code>Canceled</code> com valor igual ao <code>Finished</code>

</details>

## 10. Crie o construtor de `Rent` seguindo as regras de negócio

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Models/Rent.cs

**O que será testado:**
O construtor deve receber uma instância de <code>Vehicle</code>, uma de <code>Person</code> e um valor <code>inteiro</code> com os dias alugados.

  - Para calcular o atributo <code>Price</code> deve-se seguir a seguinte regra:
  - Para pessoas fisícas o preço deve ser o preço por dia do veículo * os dias alugados.
  - Para pessoas jurídicas o preço deve ser o preço por dia do veículo * os dias alugados com <code>10% de desconto</code>.

  - O status inicial deve ser <code>RentStatus.Confirmed</code>

  - O construtor deve alterar o atributo <code>IsRented</code> do veículo para <code>true</code>.
  - O construtor deve alterar o atributo <code>Debit</code> da pessoa para o Preço calculado.

</details>

## Bônus (não avaliativo) - Implemente os métodos de `cancelar` e `finalizar` um aluguel

<details>

<summary> Mais informações
</summary>

Crie sua lógica em src/RentCars/Types/Models/Rent.cs

**O que será testado:**
  - O método <code>Rent.Cancel()</code> deve cancelar um aluguel
    - O <code>Status</code> deve ser alterado para <code>RentStatus.Cancelled</code>

  - O método <code>Rent.Finish()</code> deve finalizar um aluguel
    - O <code>Status</code> deve ser alterado para <code>RentStatus.Finished</code>

</details>



<details>
<summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary>

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/csharp-0x-projeto-aluguel-de-carros)

</details>
  
<details>
<summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

---

<!-- mdi versão 1.1 projeto ⚠️ não exclua esse comentário -->
