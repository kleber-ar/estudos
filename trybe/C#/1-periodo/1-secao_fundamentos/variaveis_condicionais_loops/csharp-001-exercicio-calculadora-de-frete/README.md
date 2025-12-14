# Calculadora de Frete

Boas-vindas ao repositório do exercício `Calculadora de Frete`

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

Neste exercício você vai desenvolver uma aplicação console que irá ser responsável por calcular o frete por valor e peso de uma empresa de transporte. Você será capaz de praticar os conhecimentos de arrays e funções adquiridos até aqui.

</details>
  
<details>
  <summary><strong>:memo: Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

- Entender a estrutura de uma função.
- Chamar e reaproveitar funções previamente criadas
- Construir lógicas que utilizam estruturas condicionais.
- Construir lógicas que utilizam estruturas de repetição.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/csharp-001-exercicio-calculadora-de-frete.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd csharp-001-exercicio-calculadora-de-frete`

  2. Instale as dependências

  - `dotnet restore`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora, crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-csharp-001-exercicio-calculadora-de-frete`

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

  - Usando o exemplo anterior: `git push -u origin joaozinho-csharp-001-exercicio-calculadora-de-frete`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/csharp-0x-exercicio-ola-mundo`/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/csharp-0x-exercicio-ola-mundo`/pulls) e confira que o seu _Pull Request_ está criado

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

Parabéns! Você foi a pessoa desenvolvedora escolhida para criar a calculadora de frete de um dos e-commerces mais famosos do Trybeverso. 🤩

O cliente é confidencial no momento, espero que entenda. 

Porém, já fiz uma análise de requisitos com a equipe da empresa e já vou lhe passar as informações para que consiga entregar essa demanda o quanto antes e colocarmos em produção para todo mundo utilizar.

É importante ressaltar que essa empresa tem parceria com algumas transportadoras, então o preço do frete varia de acordo com o preço do pedido e com o peso do pacote.

A equipe de desenvolvimento informou que o frete será a soma do valor do frete por preço do pedido com o valor do frete por peso.

 
## 1. Calcule o Frete por preço do pedido na função `CalculateShippingPrice`

<details>
  <summary> A função deve retornar um valor do tipo double que será o preço do frete por preço do pedido. </summary><br />

✍️ A tabela que o time de Customer Success alinhado ao Marketing passou foi:

- Para pedidos iguais ou menores que R$ 50 o frete tem que ser R$ 25.

- Para pedidos acima de R$ 50 e com preço igual ou menor que R$ 100 o frete tem que ser R$ 20.

- Para pedidos acima de R$ 100 e com preço igual ou menor de R$ 200 o frete tem que ser R$ 15.

- Para pedidos acima de R$ 200 o frete é R$ 0 (grátis).

**O que será testado:**

Será testado que realizando diversas requisições à função implementada, a mesma retornará o valor correto do frete para todos os casos.
  
</details>


## 2. Calcule o Frete por peso na função `CalculateShippingWeight`

<details>
  <summary> A função deve retornar um valor do tipo double que será o preço do frete por peso. </summary><br />

✍️ A tabela que o time de Customer Success alinhado ao Marketing passou foi:

- Para pedidos com peso igual ou menor a 1,5kg, o valor será R$ 3,80;

- Para pedidos com peso maior que 1,5kg e igual ou menor a 3,5kg, o valor será R$ 5,70;

- Para pedidos com peso maior que 3,5kg e igual ou menor a 7,0kg, o valor será R$ 7,20;

- Para pedidos com peso maior que 7,0kg e igual ou menor a 10,0kg, o valor será R$ 9,40;

- Para pedidos com peso maior que 10,0kg, o valor será o peso multiplicado por R$ 1,90;

**O que será testado:**

Será testado que realizando diversas requisições à função implementada, a mesma retornará o valor correto do frete para todos os casos.

</details>


## 3. Calcule o Frete final na função `CalculateShipping`

<details>
  <summary> A função deve retornar um valor do tipo double que será o preço do frete final. </summary><br />

  - O frete final será a soma do valor calculado pela função `CalculateShippingPrice` e pelo valor calculado pela função `CalculateShippingWeight`

  - Caso o valor do frete final seja maior que R$ 45, o frete terá 15% de desconto.

**O que será testado:**

Será testado que realizando diversas requisições à função implementada, a mesma retornará o valor correto do frete para todos os casos.

</details>

## 4. Calcule o Frete final para um array de preços e um array de pesos na função `CalculateShippingFromArray`

<details>
  <summary> A função deve retornar um valor do tipo double que será o preço do frete final baseado em 2 arrays. </summary><br />

  - Você deve percorrer os arrays e somar os pesos e valores para calcular o frete

  - O frete final será a soma do valor calculado pela função `CalculateShippingPrice` e pelo valor calculado pela função `CalculateShippingWeight` sobre o valor de todos os itens do array somados.

**O que será testado:**

Será testado que realizando diversas requisições à função implementada, a mesma retornará o valor correto do frete para todos os casos.

</details>


<details>
<summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary>

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/csharp-0x-exercicio-calculadora-de-frete)

</details>
  
