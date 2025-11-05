# Boas-vindas ao repositório do exercício JWT Token!

Para realizar o exercício, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

<br />

# Termos e acordos

Ao iniciar este exercício você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

<br />

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

  Para entregar o seu exercício você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

<br />
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

  Neste exercício você vai desenvolver endpoints para login de usuários utilizando tokens JWT!

  Você deverá desenvolver alguns endpoints para praticar a habilidade de lidar com token JWT.

  1. Você deverá desenvolver um endpoints que permite a um usuário cadastrado fazer login e receber como resposta um token JWT;

  2. Você deverá desenvolver endpoints que permitam apenas a usuários com um token válido fazer requisições;

  3. Você irá praticar a validação de tokens, devolvendo respostas diferentes para usuários com permissões diferentes na aplicação.

<br />
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary>

  * Projeto individual.
  * Serão `` dias de exercício.
  * Data de entrega para avaliação final do exercício: `07/02/2024 23:59`.

</details>

<br />

# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>

  ## 👉 Com Docker

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `jwt_token` e outro chamado `jwt_token_db`;

  - A partir daqui você pode rodar o container `jwt_token` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it jwt_token bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)

  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do exercício, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  ![sequelize test](./public/remote-container.png)

  <br />

  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do exercício, e essa atualização gera conflitos com o avaliador.

  - **✨ Dica:** Para rodar o exercício desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>


<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-034-exercise-jwt-token.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-034-exercise-jwt-token`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercício`
    * Exemplo: `git checkout -b joaozinho-sd-034-exercise-jwt-token`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-sd-034-exercise-jwt-token`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-034-exercise-jwt-token/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-034-exercise-jwt-token/pulls) e confira que o seu _Pull Request_ está criado

<br />
</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

  * Faça `commits` das alterações que você fizer no código regularmente

  * Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  * Os comandos que você utilizará com mais frequência são:
    * `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    * `git add` _(para adicionar arquivos ao stage do Git)_
    * `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    * `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    * `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

<br />
</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary>

  Para "entregar" seu exercício, siga os passos a seguir:

  - Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas
    - No menu à direita, clique no *link* "Labels" e escolha a label code-review
    - No menu à direita, clique no *link* "Assignees" e escolha o seu usuário
    - No menu à direita, clique no *link* "Reviewers" e digite students, selecione o time tryber/students-sd-00

  Se ainda houver alguma dúvida sobre como entregar seu exercício, [aqui tem um video explicativo](https://vimeo.com/362189205).

  :warning: **Lembre-se de garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!**

<br />
</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary>

  À medida que você e as outras pessoas que estudam na Trybe forem entregando os exercícios, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests de colegas. Fique atento às mensagens do "Pull Reminders" no Slack!

  Use o material que você já viu sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os exercícios que chegaram para você.

<br />
</details>

<details>
  <summary><strong>🛠 Execução de testes localmente</strong></summary>

  > :information_source: IMPORTANTE

  - O teste local deve rodar o script `npm run start:test`, que vai iniciar e depois encerrar, em segundo plano **outra instância da sua API, na porta `3030`**. Dessa forma, o teste conseguira consumir sua API e validar os requisitos.
    - Caso seu computador não suporte rodar um servidor extra para os testes, execute um servidor na porta 3001 e rode o script `npm run test:dev`, este não vai criar outra instância, mas vai esperar um servidor na porta 3001.

  - Sua API deve estar funcionando minimamente para que o teste comece, dado que ele aguarda o estabelecimento da mesma para começar o teste.

  - Todos os testes **vão gerar e consumir um banco de dados próprio com final `*-test`**, que é gerado através da configuração do arquivo `src/config/config.js`.

  - Isso vai garantir que durante seu desenvolvimento, o teste não manipule ou derrube sua API na porta padrão (`3001`) ou seu banco de dados padrão (final `*-dev`), isolando os mesmos.

  - Caso ocorra algum problema, encerre o teste com `[CTRL] + [C]` e utilize o script `npm run kill:test`

  ---

  O teste local já é configurado, internamente, com a variável de ambiente `NODE_ENV=test` para indicar o banco a ser utilizado pelo Sequelize, o que deve resultar na criação de um banco, somente para o teste:

  ![sequelize test](./public/sequelize-02.png)

  Sem essa variável (modo padrão de desenvolvimento), sua API deve resultar algo como:

  ![sequelize development](./public/sequelize-01.png)

  ---

  > :information_source: Scripts para executar os testes locais:

  Vamos usar o Jest para executar os testes, use o comando a seguir para executar todos os testes: 

  ```sh
  npm test
  ```

  Caso queira executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

  ```sh
  npm test __tests__/01-exercise-create-token
  ```
  ou
  ```
  npm test 01
  ```

  Caso queira omitir dados de debug nos testes, utilize a variável de ambiente `DEBUG=false`, como em `DEBUG=false npm test`.

<br />
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary>

  Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

  Este exercício já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

  - `sd-034-exercise-jwt-token/package.json`

  Para poder rodar os `ESLint` em um exercício basta executar o comando `npm install` dentro do exercício e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo

  :warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

<br />
</details>

<details>
  <summary><strong>⚠️ Informações importantes sobre o exercício</strong></summary>

  ## ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

  ### 👀 Observações importantes:

  Em cada requisito você encontrará um exemplo de como suas funções e/ou API deverão se comportar, dado um cenário específico.

  O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

  O exercício possui uma pasta `src`, e é **fortemente recomendável que você construa sua aplicação dentro dessa pasta**.

  **Não é necessário usar o comando `npx sequelize-cli init`** uma vez que já é fornecido no exercício.

  #### Arquivos importantes

  ⚠️ Essa pasta ainda conta com alguns arquivos auxiliares que serão consumidos pelo avaliador e **não devem ser apagados em nenhuma hipótese**:

  > `src/app.js`
  ```javascript
  const express = require('express');

  // ...

  const app = express();

  // não remova ou mova esse endpoint
  app.get('/', (_request, response) => {
    response.send();
  });

  app.use(express.json());

  // ...

  // É importante exportar a constante `app`,
  // para que possa ser utilizada pelo arquivo `src/server.js`
  module.exports = app;
  ```
  Que ficará responsável por receber **as definições de middlewares e rotas** de sua API

  <br />

  ---

  > 👉 `src/server.js`
  ```javascript
  const app = require('./app');

  // não remova a variável `API_PORT` ou o `listen`
  const port = process.env.API_PORT || 3001;

  app.listen(port, () => console.log('ouvindo porta', port));
  ```
  Que ficará responsável por iniciar sua API

  <br />

  ---

  > 👉 `src/config/config.js`
  
  ```javascript
const environment = process.env.NODE_ENV || 'test';

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database:
    `${process.env.MYSQL_DB_NAME || 'jwt_token'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    dialect: 'mysql',
    ...options,
  },
  test: {
    dialect: 'mysql',
    ...options,
  },
};
  ```

  Que é o arquivo de configuração principal do *Sequelize*

  <br />

  ---

  > 👉 `.sequelizerc`

  ```javascript
  const path = require('path');

  module.exports = {
    'config': path.resolve('src',  'config', 'config.js'),
    'models-path': path.resolve('src',  'models'),
    'seeders-path': path.resolve('src',  'seeders'),
    'migrations-path': path.resolve('src',  'migrations'),
  };
  ```

  Responsável por identificar os caminhos dos recursos do Sequelize

  <br />

  ---

  **Você irá precisar configurar as variáveis de ambiente para uso do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://dev.to/pauloricardoz/usando-variaveis-de-ambiente-em-nodejs-env--4ioi) como referência.

  O arquivo a seguir, contém um modelo das variáveis de ambiente utilizadas no exercício. Para o contexto de teste local, é importante configurar as variáveis: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`:

  > 👉 `.env.example`
  ```env
NODE_ENV=development
API_PORT=3001
API_HOST=localhost

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=1234

JWT_SECRET=suaSenhaSecreta
  ```

  ```
---

  #### Variável `JWT_SECRET`:

  Esta variável de ambiente deverá ser utilizada tanto para criar o token quanto para verificá-lo. Os teste locais e o avaliador vão utilizar a variável de ambiente `JWT_SECRET` para testar os requisitos

  **:warning:️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do exercício.**

<br />
</details>

<details>
  <summary><strong>👀 Dicas</strong></summary>

  #### Status HTTP

  Tenha em mente que todas as "respostas" devem respeitar os [status do protocolo HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) com base no que o REST prega.

  Alguns exemplos:
  - Uma requisição ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de `status 201`.

  - Requisições que não seguem o formato pedido pelo servidor devem retornar um código de `status 400`;

  - Requisições que precisam de token mas não o receberam devem retornar um código de `status 401`;

  - Requisições que seguem o formato pedido pelo servidor, mas seu conteúdo não está de acordo com o estipulado pelo servidor devem retornar um código de `status 422`;

  - Um problema inesperado no servidor deve retornar um código de `status 500`;
   ---

  #### Dicas de scripts prontos

  - Deleta o banco de dados:
  ```json
  "drop": "npx sequelize-cli db:drop"
  ```

  - Cria o banco e gera as tabelas:
  ```json
  "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
  ```

  - Insere dados/Popula a tabela:
  ```json
  "seed": "npx sequelize-cli db:seed:all"
  ```

  **👀 OBS: Os testes irão rodar através do seu migrate usando os scripts acima, também listados no `package.json`.**

  **⚠️ Preste bastante atenção, pois a alteração desses scripts pode impedir o avaliador de funcionar corretamente**

  **:warning:️ Haverá um arquivo na pasta `/seeders`, que irá conter as queries para inserção no banco de dados. `Não a remova, pois o avaliador depende dela`.**

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary>

  Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário. 
  **Leva menos de 3 minutos!**

  [FORMULÁRIO DE AVALIAÇÃO DE EXERCÍCIO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH34&template=betrybe/sd-0x-exercise-jwt-token)

  :warning: **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

<br />
</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.
</details>

<br />

# Exercícios

## 1 - Crie a função `createToken` no arquivo `src/utils/auth.js`:
Crie uma função chamada `createToken` no arquivo `src/utils/auth.js` que recebe os dados de login de um usuário e retorna um token jwt válido.

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>
<br/>

- Se existe um arquivo chamado auth no diretório "src/utils/";
- Se a função `createToken` existe e está sendo exportada dentro de um objeto no arquivo `auth`;
- Se a função `createToken` retorna um token válido;
- Se a função `createToken` retorna um token criado com o algoritmo `HS256`;
- Se a função `createToken` retorna um token válido com o payload correto:
  - O payload no token deve conter um objeto com o `username` e a propriedade `admin`.
- Se a função `createToken` retorna um token com o tempo de expiração correto:
  - O token deve expirar em `1 hora`;

</details>

## 2 - Crie a função `verify` no arquivo `src/auth.js`:
Crie uma função chamada `verify` no arquivo `src/utils/auth.js` que recebe um token e retorna o payload desse token.

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>
<br/>

- Se existe um arquivo chamado auth no diretório "src/utils/";
- Se a função `verify` existe e está sendo exportada dentro de um objeto no arquivo `auth`;
- Se a função `verify` retorna o payload correto:
  - O payload deve ser um objeto contendo as propriedades `username` e `admin`.
- Se a função `verify` reconhece um token válido:
  - Se um token válido for passado a função **não deve** lançar um erro;
- Se a função `verify` reconhece um token inválido:
  - Se um token inválido for passado a função **deve** lançar um erro;

</details>


## 3 - Crie um middleware de autenticação no arquivo `src/middlewares/auth.js:
Crie um middleware de autorização no arquivo `src/middlewares/auth.js` que checa se um token foi passado e se ele é valido ou não.

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>
<br/>

- Se o middleware de autenticação existe:
  - O middleware deve ser exportado direto (como default);

- Se o token não for informado, retorne o status 401 Unauthorized e a mensagem Token not found:
  ```json
    {
      "error": { "message": "Token not found" }
    }
  ```

- Se o token for inválido, retorne o status 401 Unauthorized e a mensagem "jwt malformed":
  ```json
    {
      "error": { "message": "jwt malformed" }
    }
  ```
- Se o token for válido, insira o usuário extraído do token dentro da requisição em uma propriedade chamada `locals`:
  - O middleware deve colocar os dados do usuário dentro da requisição, de forma que seja possível acessá-los da seguinte forma:
    ```json
    req.locals.user.username;
    req.locals.user.admin;
    ```
- Se o token for válido, chame o próximo middleware;

</details>

## 4 - Crie um endpoint `POST /login`:
- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "username": "firstuser",
    "password": "123456ab"
  }
  ```

- Para que `username` seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres;
- Para que `password` seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres;
- Caso `username` e `password` sejam válidos, retorne um token que atenda às seguintes especificações:
  - Expira em uma hora;
  - Contém, no payload, o nome de usuário informado na request;
  - Contém, no payload, uma propriedade admin, com o valor false.

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>
<br/>

* **[Caso o username não seja informado ou seja vazio, retorne o status `422` e a mensagem `O campo \"username\" é obrigatório`]**
  - Caso o username não seja informado ou seja vazio, sua aplicação deverá retornar um status 422 e a mensagem no corpo da requisição com o seguinte formato:

    ```json
    { 
      "error": { 
        "message": "O campo \"username\" é obrigatório" 
      }
    }
    ```
    
* **[Caso o username informado não seja uma string alfanumérica de, pelo menos, 5 caracteres, retorne o status `422` e a mensagem `O campo "username" deve ter pelo menos 5 caracteres`]**
  - Caso o username informado não seja uma string alfanumérica de, pelo menos, 5 caracteres, sua aplicação deverá retornar um status 401 e a mensagem no corpo da requisição com o seguinte formato:

    ```json
    {
      "error": {
        "message": "O campo \"username\" deve ter pelo menos 5 caracteres"
      }
    }
    ```

* **[Caso a senha não seja informada ou seja vazia, retorne o status `422` e a mensagem `O campo \"password\" é obrigatório`]**
  - Caso a senha não seja informada ou seja vazia, sua aplicação deverá retornar um status 422 e a mensagem no corpo da requisição com o seguinte formato:

    ```json
    { 
      "error": { 
        "message": "O campo \"password\" é obrigatório" 
      }
    }
    ```

* **[Caso a senha informada não seja uma string de, pelo menos, 5 caracteres, retorne o status `422` e a mensagem `O campo "password" deve ter pelo menos 5 caracteres`]**
  - Caso o password informado não seja uma string de, pelo menos, 5 caracteres, sua aplicação deverá retornar um status 401 e a mensagem no corpo da requisição com o seguinte formato:

    ```json
    {
      "error": {
        "message": "O campo \"password\" deve ter pelo menos 5 caracteres"
      }
    }
    ```

* **[Caso não seja encontrado um usuário com o username informado, retorne o status `401` e a mensagem `Usuário ou senha inválidos`]**
  - Caso o username informado não exista, sua aplicação deverá retornar um status 401 e a mensagem no corpo da requisição com o seguinte formato:

    ```json
    { 
      "error": { 
        "message": "Usuário ou senha inválidos" 
      }
    }
    ```

* **[Caso seja encontrado um usuário com o username informado, mas a senha não corresponda, retorne o status `401` e a mensagem `Usuário ou senha inválidos`]**
  - Caso o password informado não seja o mesmo que o password do usuário encontrado, sua aplicação deverá retornar um status 401 e a mensagem no corpo da requisição com o seguinte formato:

    ```json
    { 
      "error": { 
        "message": "Usuário ou senha inválidos" 
      }
    }
    ```


* **[Caso sejam informados dados válidos no corpo da requisição, deve retornar status 200 e um token JWT válido]**
    - Se a requisição tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

      ```json
      {
        "token": <token-jwt-válido>
      }
      ```

* **[Caso o username informado seja `admin` e a senha seja `s3nh4S3gur4`, a chave `admin` no payload do token retornado deve ter o valor true"]**

    - Será validado que o token foi gerado corretamente (atenção ao uso de variáveis de ambiente) e que o seu payload possui a chave `admin` com o valor sendo `true`.

</details>

## 5 - Crie o endpoint `/GET /users/me`:
- O endpoint deve ser acessível através do URL `/users/me`;
- O token da requisição deverá ser informado no `header` `authorization`:
<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

  * **[Caso não seja informado um token no `header authorization`, retorne o status `401` Unauthorized e a mensagem `Token not found`]**
  - Caso não seja informado um token no header authorization, sua aplicação deverá retornar um status 401 e a mensagem no corpo da requisição com o seguinte formato:
    ```json
    {
      "error": {
        "message": "Token not found"
      }
    }
    ```
  * **[Caso ocorra algum erro ao validar o token, retorne o status `401` Unauthorized e a `mensagem de erro da biblioteca`]**
    - O corpo da resposta, caso ocorra algum erro ao validar o token, deverá ter o seguinte formato:
      ```json
      {
        "error": {
          "message": <mensagem-de-erro-da-biblioteca>
        }
      }
      ```
  * **[Caso o token seja válido, retorne o status `200` e no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade `admin`]**
    - O corpo da resposta caso o token seja válido deverá ter o seguinte formato:
    ```json
      {
        "username": "firstuser",
        "admin": false
      }
      ```

</details>

## 6 - Crie o endpoint `/GET /top-secret`:
- O endpoint deve ser acessível através do URL `/top-secret`;
- Para esse exercício, criei um novo middleware exclusivo para validação de pessoas usuárias administradoras.
<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

  * **[Caso não seja informado um token no `header authorization`, retorne o status `401` Unauthorized e a mensagem `Token not found`]**
    - Caso não seja informado um token no header authorization, sua aplicação deverá retornar um status 401 e a mensagem no corpo da requisição com o seguinte formato:
      ```json
      {
        "error": {
          "message": "Token not found"
        }
      }
      ```

  * **[Caso ocorra algum erro ao validar o token, retorne o status `401` Unauthorized e a `mensagem de erro da biblioteca`]**
    - O corpo da resposta, caso ocorra algum erro ao validar o token, deverá ter o seguinte formato:
      ```json
      {
        "error": {
          "message": <mensagem-de-erro-da-biblioteca>
        }
      }
      ```

  * **[Caso o token seja válido, mas o payload contenha `admin` com o valor false, retorne status `401` e a mensagem de erro `Restricted access`]**
    - Se o token informado for válido, porém o payload contiver o campo `admin` com valor false, retorne o status `401` e a mensagem de erro Restricted access:
    ```json
      {
        "error": {
          "message": "Restricted access"
        }
      }
      ```

  * **[Caso o token seja válido, e o payload contenha `admin` com o valor true, retorne status `200` e um corpo com a propriedade `secretInfo` de valor `Peter Parker é o Homem-Aranha`]**
    - Se o token for válido e o campo admin do payload possuir o valor true, devolva o status `200` e o corpo da resposta com a propriedade `secretInfo` com valor `PeterParker é o Homem-Aranha`:
    ```json
    {
      "secretInfo": "Peter Parker é o Homen-Aranha"
    }
    ```
</details>
