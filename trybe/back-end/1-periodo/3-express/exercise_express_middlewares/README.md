# Boas-vindas ao repositório de exercícios de Express - Middlewares

Nesse exercício, vamos praticar o conhecimento adquirido sobre middlewares do express para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza.

Para desenvolver o exercício, você deverá seguir contidas nesse README. Tenha atenção ao que é pedido e em caso de dúvida, procure o time de instrução via _Slack_ ou nas mentorias! #vqv 🚀

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Uma startup de Ecoturismo te procurou para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza. O objetivo é valorizar e promover a capacidade turística do Brasil e os principais requisitos da API que essa startup solicitou são:
  1. Cadastrar novas atividades de ecoturismo com as seguintes informações:
     - Nome da atividade;
     - Preço;
     - Descrição: contendo avaliação, dificuldade e data de criação da atividade.
  2. Cadastrar pessoas usuárias das atividades de ecoturismo com as seguintes informações:
     - Email;
     - Senha;
     - Primeiro nome;
     - Telefone;
  3. Permitir que somente pessoas cadastradas realizem o cadastro de novas atividades de ecoturismo.
</details>

<details>
  <summary><strong>🚵 Habilidades a serem trabalhadas</strong></summary><br />

  <ul>
    <li>Criar middlewares no express;</li>
    <li>Empregar middlewares para realizar validações;</li>
    <li>Empregar middlewares para proteger rotas da aplicação;</li>
  </ul>

</details>

# Orientações

<details>
  <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />

  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `express-middlewares`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it express-middlewares bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  > Execute a aplicação com `npm start` ou `npm run dev`


  :eyes: **De olho na dica:**

  A extensão `Remote - Containers` do VS Code (que estará na seção de extensões recomendadas do programa) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >

  ---

  ## Sem Docker

  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:**
  1. Para realizar o exercício desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.

</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-0x-project-talker-manager.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-project-talker-manager`

  2. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercício`
    - Exemplo: `git checkout -b joaozinho-sd-0x-project-talker-manager`

  3. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  4. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-talker-manager`

  5. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-talker-manager/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-talker-manager/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu exercício está pronto para o _"Code Review"_ de seus colegas, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-034`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este exercício já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um exercício basta executar o comando `npm install` dentro do exercício e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
</details>

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

  Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este exercício já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do exercício.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Usaremos o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

  Este exercício já vem configurado e com suas dependências

  ### Executando todos os testes

  Para poder executar os testes, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os seus testes serão executados.

  ### Executando um teste específico

  Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

  > Colocamos o número do requisito como pré-fixo para facilitar, veja abaixo.

  Ex: Para executar o teste referente ao **01-nameValidation**, basta digitar `npm test 01`.

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary><br />

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE EXERCÍCIO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH34&template=betrybe/sd-0x-exercise-express-middlewares)

:warning: **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Exercícios

Uma startup de Ecoturismo te procurou para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza. O objetivo é valorizar e promover a capacidade turística do Brasil e os principais requisitos da API que essa startup solicitou são:

 - Cadastrar novas atividades de ecoturismo com as seguintes informações:
   - Nome da atividade;
   - Preço;
   - Descrição: contendo avaliação, dificuldade e data de criação da atividade.

Analisando os requisitos acima, a pessoa Tech Lead identificou as seguintes chaves para a requisição:

```json
{
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}
```

Agora, em posse dessas informações faça os exercícios 1 a 6 abaixo:
## 1 - Crie um middleware para validar o campo `name`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade sem o campo `name`.

    - Caso o campo `name` não seja informado, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo name é obrigatório"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade com o campo `name` menor do que 4 caracteres

    - Caso o campo `name` informado tenha menos do que 4 caracteres, retorne um `status 400` com o seguinte corpo:

      ```json
        {
          "message": "O campo name deve ter pelo menos 4 caracteres"
        }
      ```


</details>

## 2 - Crie um middleware para validar o campo `price`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade sem o campo `price`.

    - Caso o campo `price` não seja informado, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo price é obrigatório"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade com o campo `price` não numérico

    - Caso o campo `price` informado não seja um número, retorne um `status 400` com o seguinte corpo:

      ```json
        {
          "message": "O campo price deve ser um número maior ou igual a zero"
        }
      ```

  - Será validado que não é possivel cadastrar uma atividade com o campo `price` com valor negativo

    - Caso o campo `price` informado possua valor negativo, retorne um `status 400` com o seguinte corpo:

      ```json
        {
          "message": "O campo price deve ser um número maior ou igual a zero"
        }
      ```
  - Será validado que é possivel cadastrar uma atividade com o campo `price` igual a `0`

    - Caso o cadastro aconteça com sucesso, retorne um `status 201` com o seguinte corpo:

      ```json
        {
          "message": "Atividade cadastrada com sucesso!"
        }
      ```

</details>

## 3 - Crie um middleware para validar o campo `description`, que possui as chaves `createdAt`, `rating` e `difficulty`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade sem o campo `description`.

    - Caso o campo `description` não seja informado, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo description é obrigatório"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade com o campo `description` sem a chave `createdAt`

    - Caso o campo `createdAt` não seja informado, retorne um `status 400` com o seguinte corpo:

      ```json
        {
          "message": "O campo createdAt é obrigatório"
        }
      ```

  - Será validado que não é possivel cadastrar uma atividade com o campo `description` sem a chave `rating`

    - Caso o campo `rating` não seja informado, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo rating é obrigatório"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade com o campo `description` sem a chave `difficulty`

    - Caso o campo `difficulty` não seja informado, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo difficulty é obrigatório"
      }
      ```

</details>

## 4 - Crie um middleware para validar o campo `createdAt` no formato `dd/mm/aaaa`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade com o campo `createdAt` tendo formato inválido.

    - Caso o campo `createdAt` possua formato diferente de `dd/mm/aaaa`, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"
      }
      ```

</details>


## 5 - Crie um middleware para validar o campo `rating`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade o campo `rating` não sendo um inteiro

    - Caso o campo `rating` não seja um número inteiro, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo rating deve ser um número inteiro entre 1 e 5"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade o campo "rating" menor que 1

    - Caso o campo `rating` informado seja menor do que 1, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo rating deve ser um número inteiro entre 1 e 5"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade o campo "rating" maior que 5

    - Caso o campo `rating` informado seja maior que 5, retorno um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo rating deve ser um número inteiro entre 1 e 5"
      }
      ```

</details>

## 6 - Crie um middleware para validar o campo `difficulty`

<details>
  <summary> Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade com o campo `difficulty` diferente de `Fácil`, `Médio`, ou `Difícil`
    - Caso o campo `difficulty` informado tenha um valor diferente de `Fácil`, `Médio`, ou `Difícil`, retorne um `status 400` com o seguinte corpo:

      ```json
      {
        "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"
      }
      ```

</details>

---

Parabéns! Seu cliente ficou muito satisfeito com o trabalho e solicitou mais alguns requisitos para você implementar. Veja abaixo:

 - Cadastrar pessoas usuárias das atividades de ecoturismo com as seguintes informações:
   - Email;
   - Senha;
   - Primeiro nome;
   - Telefone;
- Permitir que somente pessoas cadastradas realizem o cadastro de novas atividades de ecoturismo.

Agora, para continuar deixando seu cliente satisfeito,faça os exercícios 7 e 8 abaixo:
## 7 - Crie um endpoint `POST` com a rota `/signup`
Essa rota deve:
- Ter os campos `email`, `password`, `firstName` e `phone` obrigatoriamente;
- Caso os campos não sejam preenchidos, retornar o status 401 - Unauthorized e uma mensagem (formato json);
- Gerar um token aleatório válido;

  - De olho na dica👀: Para gerar o token você pode utilizar a função randomBytes, do módulo crypto do Node, dessa forma:

    ```js
      const crypto = require('crypto');

      function generateToken() {
        return crypto.randomBytes(8).toString('hex');
      }

      module.exports = generateToken;
    ```
<details>
  <summary> Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possível registrar uma pessoa usuária sem informar o campo `email`

    - Caso o campo `email` não seja informado, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Campos ausentes!"
      }
      ```

  - Será validado que não é possível registrar uma pessoa usuária sem informar o campo `password`

    - Caso o campo `password` não seja informado, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Campos ausentes!"
      }
      ```

  - Será validado que não é possível registrar uma pessoa usuária sem informar o campo `firstName`

    - Caso o campo `firstName` não seja informado, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Campos ausentes!"
      }
      ```

  - Será validado que não é possível registrar uma pessoa usuária sem informar o campo `phone`

    - Caso o campo `phone` não seja informado, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Campos ausentes!"
      }
      ```

  - Será validado que não é possível registrar uma pessoa usuária sem informar o campo `email`

    - Caso o campo `email` não seja informado, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Campos ausentes!"
      }
      ```

  - Será validado que é gerado um token aleatório ao cadastrar uma pessoa com sucesso

    - Caso o cadastro ocorra com sucesso, retorne um `status 201` e um corpo com um token aleatório de 16 caracteres:

     ```json
      {
        "token": "abcdefgh91234567"
      }


</details>


## 8 - Crie um middleware de autenticação ao endpoint `POST` com a rota `/activities`

Essa rota precisa:

 - Ser validada por meio do token que foi gerado ao realizar o signup;
 - O token deve ser encontrado pelo header Authorization;
 - O token deve ter exatamente 16 caracteres;
 - Caso o token seja inválido ou inexistente, retornar o status 401 - Unauthorized e uma mensagem (formato json);

<details>
  <summary> Os seguintes pontos serão avaliados:</summary><br />

  - Será validado que não é possivel cadastrar uma atividade sem informar um token

    - Caso seja feita uma requisição ao endpoint `POST` na rota `/activities` sem informar um token no `header authorization`, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Token inválido!"
      }
      ```

  - Será validado que não é possivel cadastrar uma atividade com um token inválido

    - Caso seja feita uma requisição ao endpoint `POST` na rota `/activities` informando um token no `header authorization` que não tenha 16 caracteres, retorne um `status 401` com o seguinte corpo:

      ```json
      {
        "message": "Token inválido!"
      }
      ```

  - Será validado que é possivel cadastrar uma atividade utilizando o token retornado pela rota /signup

    - Deverá ser possivel cadastrar uma atividade informando o token gerado pela rota ` POST /signup`. Nesse caso, retorne um `status 201` com o seguinte corpo:

      ```json
      {
        "message": "Atividade cadastrada com sucesso!"
      }
      ```

</details>
