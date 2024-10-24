# Boas-vindas ao repositório do Playground Functions

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

No seu time de desenvolvimento, você ficou responsável por implementar o código de funções que resolvem problemas com respostas pré-determinadas. Você pode utilizar a lógica de programação para te ajudar na análise de cada problema e resposta esperada, facilitando a implementação do código de cada uma das funções. Estas funções irão lhe ajudar a colocar em prática todo o conteúdo desta seção.

</details>

## Orientações

<details>
<summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

   * Use o comando: `git clone git@github.com:tryber/sd-034-exercise-playground-functions.git`
   * Entre na pasta do repositório que você acabou de clonar:
     * `cd sd-034-exercise-playground-functions`

2. Instale as dependências

   * `npm install`

3. Crie uma branch a partir da branch `main`

   * Verifique que você está na branch `main`
     * Exemplo: `git branch`
   * Se não estiver, mude para a branch `main`
     * Exemplo: `git checkout main`
   * Crie uma branch à qual você vai submeter os `commits` de seu exercício
     * Você deve criar uma branch no seguinte formato: `nome-sobrenome-playground-functions`
     * Exemplo: `git checkout -b joaozinho-sauro-playground-functions`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

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

5. Adicione a sua branch com o novo `commit` ao repositório remoto

   * Usando o exemplo anterior: `git push -u origin joaozinho-sauro-playground-functions`

6. Crie um novo `Pull Request` _(PR)_

   * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-034-exercise-playground-functions/pulls)
   * Clique no botão verde _"New pull request"_
   * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
   * Adicione uma descrição para o Pull Request, um título que o identifique, e clique no botão verde "Create pull request". Crie da seguinte forma: `[JOAOZINHO] Playground Functions`
   * Adicione uma descrição para o Pull Request, um título nítido que o identifique, e clique no botão verde _"Create pull request"_
   * **Não se preocupe em preencher mais nada por enquanto!**
   * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-034-exercise-playground-functions/pulls) e confira se o seu _Pull Request_ está criado

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

* Crie as funções no arquivo `challenges.js` que está no diretório `src`, usando os mesmos nomes especificados nos requisitos. Você pode criar outras funções de auxílio, entretanto, **você deve criar e utilizar as funções com os nomes que estão nos requisitos, pois estas que serão avaliadas.**

**De olho na dica 👀**:

* Para verificar se a sua função foi criada corretamente você pode instalar a extensão `code runner` no _VSCode_;

* Utilize `console.log()` para testar as funções localmente, mas remova antes de fazer o `push` 😉.

</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

Para poder rodar o `ESLint` lembre-se de executar o `npm install` dentro do projeto e depois rode o comando:

```bash
npm run lint
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre ESLint. Você vai encontrar esse conteúdo em nossa [Plataforma de Aprendizagem](https://app.betrybe.com/learn), na seção **Desenvolvimento Web - Vida Real**. O conteúdo sobre ESLint está na seção 34.

⚠️ **NESTE EXERCÍCIO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠️

:warning: **NESTE EXERCÍCIO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** :warning:
</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />
Todos os requisitos do exercício serão testados automaticamente por meio do Jest.

Para rodar o avaliador automático localmente no seu exercício, execute um dos comandos abaixo:

Para executar todos os testes utilize:

```bash
npm test
```

**ou**:

Para executar um arquivo de teste específico, utilize `npm test nomeDoArquivoDeTeste`:

```bash
npm test splitSentence
```
  
* Os requisitos do seu exercício são avaliados automaticamente

Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**:

* Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

* Na página que se abrirá, procure pela linha _**"Evaluator step"**_ e clique nela;

* Caso tenha dúvidas, poste no _Slack_.

:warning: **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

:warning: **Leia todos os requisitos atentamente e siga à risca o que for pedido. Não altere o nome de nenhuma função** :warning:

# Requisitos: parte 1

## 1 - Crie uma função que divida uma frase

<details>
<summary>Implemente a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras</summary> <br />

A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas.
  
Exemplo: se a função receber a string `'go Trybe'`, o retorno deverá ser `['go', 'Trybe']`.

### O que será testado
  
* A função `splitSentence` deve retornar o valor `['go', 'Trybe']` quando receber como parâmetro a string `'go Trybe'`;

* A função `splitSentence` deve retornar o valor `['vamo', 'que', 'vamo']` quando receber como parâmetro a string `'vamo que vamo'`;

* A função `splitSentence` deve retornar o valor `['foguete']` quando receber como parâmetro a string `'foguete'`.

</details>

## 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

<details>
<summary>Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates</summary> <br />

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

* `wins`: é o número de vitórias e vale 3 pontos
  
* `ties`: é o número de empates e vale 1 ponto

### O que será testado

* A função `footballPoints` deve retornar o valor `50` pontos quando o time tenha 14 vitórias e 8 empates;

* A função `footballPoints` deve retornar o valor `5` pontos quando o time tenha 1 vitória e 2 empates;

* A função `footballPoints` deve retornar o valor `0` pontos quando o time tenha 0 vitórias e 0 empates.

</details>

## 3 - Crie uma função que adiciona músicas em uma playlist

<details>
<summary>Implemente a função <code>addMusics</code> que adiciona músicas a uma playlist</summary> <br />

A função `addMusics` recebe o nome do artista (`artistName`), o nome da música (`musicName`) e o tempo da música (`musicTime`). Após trabalhar esses dados, eles deverão ser armazenados em um array chamado `playlist`. Para isso, considere que:

* Os valores acima devem ser enviados ao array, juntos, em formato de objeto.

### O que será testado

* Será verificado se o array `playlist` existe e se inicialmente é vazio;

* Será verificado se o array `playlist` possui 1 objeto depois de chamar a função `addMusics` 1 vez com os valores:

```js
{ 
  artist: 'Survivor', 
  music: 'Eye of the Tiger', 
  musicTime: 2.62 
}
```

* Será verificado se o array `playlist` possui 2 objetos depois de chamar a função `addMusics` 2 vez com os valores:

```js
{ 
  artist: 'Survivor', 
  music: 'Eye of the Tiger', 
  musicTime: 2.62 
},
{ 
  artist: 'Roy Orbison', 
  music: 'Pretty Woman', 
  musicTime: 2.73 
}
```

</details> <br /><br />

# Requisitos: parte 2

## 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

<details>
<summary>Implemente a função <code>moreExpensive</code> que deverá retornar uma string contendo qual é o produto mais caro de acordo com uma categoria que será passada como parâmetro.</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/mcDonalds.js`

A função `moreExpensive` deve receber a base de dados a ser trabalhada (`data`) e a categoria (`category`) do produto.

A função deve retornar uma string contendo o produto mais caro da seguinte forma:

>O produto mais caro é: `nome do produto`, que custa: R$`preço do produto`.

O preço do produto deverá ser apresentado contendo 2 casas decimais.

### O que será testado

* Quando a categoria for `sandwiches`, o produto mais caro deve ser o `Duplo Quarterão`, logo, a string deve ser: `O produto mais caro é: Duplo Quarterão, que custa: R$41.90.`;

* Quando a categoria for `sideDishes`, o produto mais caro deve ser o `Chicken McNuggets - 10 unidades`, logo, a string deve ser: `O produto mais caro é: Chicken McNuggets - 10 unidades, que custa: R$16.90.`;

* Quando a categoria for `desserts`, o produto mais caro deve ser o `McFlurry Ovomaltine Caramelo`, logo, a string deve ser: `O produto mais caro é: McFlurry Ovomaltine Caramelo, que custa: R$13.90.`.

</details>

## 5 - Crie uma função que verifica se um determinado item já existe

<details>
<summary>Implemente a função <code>checkItem</code> que deverá retornar se um determinado item existe ou não na base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/mcDonalds.js`

A função `checkItem` deve receber a base de dados a ser trabalhada (`data`), a categoria (`category`) do produto e o produto a ser buscado (`item`).

A função deve retornar `true` caso o produto já exista na base de dados ou `false` caso não exista.

**O que será testado:**

* Será verificado se a função `checkItem` retorna `true` quando a categoria for "drinks" e o elemento for "Coca-Cola 300ml";

* Será verificado se a função `checkItem` retorna `true` quando a categoria for "sandwiches" e o elemento for "Big Tasty";

* Será verificado se a função `checkItem` retorna `false` quando a categoria for "sideDishes" e o elemento for Legumes no Vapor".

</details>

## 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

<details>
<summary>Implemente a função <code>addNewItem</code> que deverá adicionar um novo item caso esse item não exista na base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/mcDonalds.js`

A função `addNewItem` deve receber a base de dados a ser trabalhada (`data`), a categoria (`category`) do produto, o produto a ser buscado (`item`) e as outras informações de um item: `price`, `ingredients` e `calories`.

* A função deve retornar o novo item caso o produto ainda não exista na base de dados

* Caso o item não exista, ele deve ser criado e adicionado à base de dados

* Caso o item já exista, a função deve retornar a mensagem: `O produto: "nome do produto" já existe!`

### O que será testado

* Será verificado se, ao passar os valores abaixo (que não existem na base de dados), a função `addNewItem` adiciona este item na categoria "sideDishes".

```js
{
  name: 'McFritas Gigante',
  price: 76.90,
  ingredients: ['muita batata', 'muito sal'],
  calories: 78976,
}
```

* Será verificado se, ao passar os valores abaixo (que não existem na base de dados), a função `addNewItem` adiciona este item na categoria "sandwiches".

```js
{
  name: 'X-Poderosas',
  price: 108.75,
  ingredients: ['açúcar', 'tempero', 'tudo o que há de bom', 'elemento X'],
  calories: 99999,
}
```

* Será verificado se, ao passar os valores abaixo (que existem na base de dados), a função `addNewItem` não adiciona este item na categoria "desserts" e retorna a mensagem: `O produto: "Torta de Banana" já existe!`.

```js
{
  name: 'Torta de Banana',
  price: 6.90,
  ingredients: ['banana', 'massa crocante'],
  calories: 222,
}
```

</details>

## 7 - Crie uma função que conta a quantidade de pessoas por gênero

<details>
<summary>Implemente a função <code>counterGender</code> que deverá contar quantas pessoas existem na base de dados por gênero</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

A função `counterGender` deve receber a base de dados a ser trabalhada (`data`) e retornar a quantidade de pessoas do gênero `male` e `female`.

A função deve retornar as informações no formato de objeto conforme o exemplo:

```js
{
  male: 10,
  female: 15
}
```

### O que será testado

* Será verificado se o valor retornado é um objeto;

* Será verificado se os valores retornados são:

```js
{
  male: 49,
  female: 55
}
```

</details> <br /><br />

## Requisitos: parte 3

### 8 - Crie uma função que retorna os elementos de um determinado estado

<details>
<summary>Implemente a função <code>filterState</code> que deverá retornar todos os elementos que forem de um determinado estado</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

* A função `filterState` deve receber a base de dados a ser trabalhada (`data`) e o estado a ser filtrado (`state`).

* A função deve retornar um novo array contendo todos os elementos que são do estado filtrado.

### O que será testado

* Será verificado se o valor retornado é um array;

* Será verificado se, ao passar um valor de estado inexistente, o valor retornado é um array vazio;

* Será verificado se, ao passar o estado "Wisconsin", a função retorna um array com 2 elementos:

```js
{
  _id: '644aec92ba6db64320a60fa0',
  isActive: true,
  picture: 'LINK DA IMAGEM',
  age: 37,
  name: 'Frederick Howe',
  purchaseDate: '2023/04/01',
  gender: 'male',
  company: 'MATRIXITY',
  email: 'frederickhowe@matrixity.com',
  phone: '(865) 437-3767',
  country: 'Niue',
  address: {
    number: 498,
    street: 'Ralph Avenue',
    city: 'Chautauqua',
    state: 'Wisconsin'
  }
},
{
  _id: '644aec92d0ea040a787158dd',
  isActive: true,
  picture: 'LINK DA IMAGEM',
  age: 50,
  name: 'Ina House',
  purchaseDate: '2023/04/01',
  gender: 'female',
  company: 'ZOARERE',
  email: 'inahouse@zoarere.com',
  phone: '(902) 468-2001',
  country: 'Eritrea',
  address: {
    number: 168,
    street: 'Central Avenue',
    city: 'Allentown',
    state: 'Wisconsin'
  }
}
```

</details>

## 9 - Crie uma função que altera a propriedade `picture`

<details>
<summary>Implemente a função <code>changePicture</code> que deverá alterar a propriedade "picture" de todos os elementos da base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

* A função `changePicture` deve receber a base de dados a ser trabalhada (`data`) e o link (`link`) a ser colocado no valor atual da propriedade;

* O valor da propriedade "picture" que deve ser colocado em todos os elementos é: `https://picsum.photos/200/300`;

* A função deve retornar um novo array contendo todos os elementos transformados.

## O que será testado

* Será verificado se o valor retornado é um array;

* Será verificado se todos os elementos possuem o valor "https://picsum.photos/200/300" para a chave "picture".

</details>

## 10 - Crie um função que gera um relatório

<details>
<summary>Implemente a função <code>generateReport</code> que deverá gerar um relatório em forma de objeto, de várias informações da base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

* A função `generateReport` deve receber a base de dados a ser trabalhada (`data`);

* A função `generateReport` deve retornar um objeto com várias informações:
  * `totalGuests`: valor total de pessoas convidadas. O valor deve ser um `number`;
  * `totalGender`: quantidade de pessoas por gênero. O valor deve ser um `object`;
  * `avgAge`: média de idade das pessoas. O valor deve ser um `number` com 2 casas decimais;
  * `countries`: array com todos os países representados.
    * Este array não pode conter valores repetidos - Pesquise sobre `Array.includes()`;
    * Este array deve estar ordenado em ordem alfabética (A-Z) - Pesquise sobre `Array.sort()`.

Exemplo de saída:

```js
{
  totalGuests: 104,
  totalGender: {
    male: 49,
    female: 55
  },
  avgAge: 32.94,
  countries: [
      'Albania',
      'Algeria',
      'Anguilla',
      'Argentina',
      'Aruba',
      'Azerbaijan',
      'Bahrain',
      'Bangladesh',
      'Benin',
      'Bermuda',
      'Bolivia',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      ...
    ]
}
```

### O que será testado

* Será verificado se o valor retornado é um objeto;

* Será verificado se o objeto retornado possui as propriedades: "totalGuests", "totalGender", "avgAge" e "countries";

* Será verificado se os valores das propriedades estão corretos.

</details>
