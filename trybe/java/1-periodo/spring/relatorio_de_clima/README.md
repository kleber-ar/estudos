# Relatório de Clima

Boas-vindas ao repositório do exercício Relatório de Clima

Para realizar o exercício, atente-se a cada passo descrito a seguir e se tiver **qualquer dúvida**, nos envie no _Slack_ da turma! #vqv 🚀

Aqui, você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos
Ao iniciar este exercício, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

## Entregáveis

<details>
  <summary>🤷🏽‍♀️ Como entregar</summary><br />

Para entregar o seu exercício, você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary>👨‍💻 O que deverá ser desenvolvido</summary><br />

Neste projeto você vai implementar classes para gerar um relatório do tempo utilizando técnicas de injeção de dependência com o Spring framework.

</details>

<details>
  <summary><strong>📝 Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

- Implementar endpoints RESTful utilizando o framework Spring
- Criar classes DTO (Data Transfer Object) para transferir dados entre camadas ou sistemas
- Implementar a camada de serviço para encapsular a lógica de negócio

</details>

## Orientações

<details>

   <summary><strong>‼ Antes de começar a desenvolver </strong></summary>

1. Clone o repositório

- Use o comando: `git clone <url do repositório>`
- Entre na pasta do repositório que você acabou de clonar:
    - `cd <nome do repositório>`

2. Instale as dependências

    - `mvn install`  

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
    - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
- Agora, crie uma branch à qual você vai submeter os `commits` do seu exercício:
    - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-exercício`;
    - Exemplo: `git checkout -b maria-soares-lessons-learned`

4. Crie na raiz do exercício os arquivos que você precisará desenvolver:

- Verifique que você está na raiz do exercício:
    - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/maria/code/**sd-0x-project-lessons-learned**_
- Crie os arquivos index.html e style.css:
    - Exemplo: `touch index.html style.css`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_:
    - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
- Adicione o novo arquivo ao _stage_ do Git:
    - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (devem aparecer listados os arquivos em verde)
- Faça o `commit` inicial:
    - Exemplo:
        - `git commit -m 'iniciando o exercício. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin maria-soares-lessons-learned`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-lessons-learned/pulls)
    - Clique no botão verde _"New pull request"_
    - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para o seu _Pull Request_
    - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_

- Adicione uma descrição para o _Pull Request_, um título nítido que o identifique, e clique no botão verde _"Create pull request"_

 <img width="1335" alt="Exemplo de pull request" src="https://user-images.githubusercontent.com/42356399/166255109-b95e6eb4-2503-45e5-8fb3-cf7caa0436e5.png">

- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-lessons-learned/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>

<summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

Faça `commits` das alterações que você fizer no código regularmente, pois assim você garante visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho :) ;

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;
- Os comandos que você utilizará com mais frequência são:
    - `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;
    - `git add` _(para adicionar arquivos ao stage do Git)_;
    - `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
    - `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;
    - `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
<summary><strong>🎛 Checkstyle</strong></summary>

Para garantir a qualidade do código, vamos utilizar neste exercício o `Checkstyle`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para poder rodar o `Checkstyle` certifique-se de ter executado o comando `mvn install` dentro do repositório.

Para rodá-los localmente no repositório, execute os comandos abaixo:

```bash
mvn checkstyle:check
```

Se a análise do `Checkstyle` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `Checkstyle` na sua `IDE`. Para isso, volte na primeira seção do conteúdo.

⚠️ **PULL REQUESTS COM ISSUES NO `Checkstyle` NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
<summary><strong>🛠 Testes</strong></summary>

Para executar todos os testes basta rodar o comando:
```bash
mvn test
```

Para executar apenas uma classe de testes:
```bash
mvn test -Dtest="TestClassName"
```

</details>

## Requisitos

### 1 - Implementar um bean para WeatherClient

<details>
  <summary>Criar um bean que implemente a interface `WeatherClient`</summary><br />

O projeto já disponibiliza uma interface `WeatherClient`, então você precisa:

- Criar uma classe que implementa essa interface
  - Esta classe pode ter qualquer nome
- Implementar o método `getWeather`, que:
  - Recebe o nome de uma cidade como parâmetro
  - Retorna uma String representando o clima nessa cidade.
    - Nota: neste momento você pode retornar uma String fixa que quiser (ex: "tempinho bom"). Ao final do projeto há uma sugestão caso depois você queira implementar uma consulta real ao clima da cidade.
- Disponibilizar a classe implementada como um Bean
  - Você pode utilizar qualquer das técnicas que aprendeu, seja transformando a classe em um componente ou disponibilizando-a através de um método gerador de bean.

Você também pode criar classes e métodos extras, se julgar necessário.

_**Importante**_: implemente sua solução em um subpacote da aplicação principal, mas não utilize o pacote `interfaces`, pois ele é restaurado durante a execução do projeto pelo avaliador. Você pode criar um subpacote próprio se quiser, desde que esteja dentro da estrutura da aplicação principal.
</details>

### 2 - Implementar um bean para WeatherService

<details>
  <summary>Criar um bean que implemente a interface `WeatherService`, fazendo </summary><br />

O projeto já disponibiliza uma interface `WeatherService`, então você precisa:

- Criar uma classe que implementa essa interface
  - Esta classe pode ter qualquer nome
- Sua classe deve utilizar injeção de dependências para receber o bean implementado para a `WeatherClient`.
  - Você pode utilizar qualquer uma das técnicas de injeção de dependência aprendidas, mas considere qual o caso de uso mais apropriado aqui.
- Implementar o método `getWeatherReport`, que:
  - Recebe o nome de uma cidade como parâmetro
  - Retorna uma String no formato `O clima é: XXXXXX`, onde `XXXXXX` deve ser o retorno do método `getWeather`, chamado a partir do bean da `WeatherClient` que foi injetado acima.
- Disponibilizar a classe implementada como um Bean.
  - Você pode utilizar qualquer das técnicas que aprendeu, seja transformando a classe em um componente ou disponibilizando-a através de um método gerador de bean.
    - Sugestão: utilize uma técnica diferente da que utilizou para o primeiro bean, pois isso vai te ajudar a praticar :)

Você também pode criar classes e métodos extras, se julgar necessário.

_**Importante**_: implemente sua solução em um subpacote da aplicação principal, mas não utilize o pacote `interfaces`, pois ele é restaurado durante a execução do projeto pelo avaliador. Você pode criar um subpacote próprio se quiser, desde que esteja dentro da estrutura da aplicação principal.
</details>



<details>
  <summary>Vamos inovar?</summary><br />

#### Utilizar uma API de clima

Este não é um requisito do exercício, apenas uma proposta de implementação, caso você queira melhorar a aplicação e praticar mais.

A classe de implementação da `WeatherClient` está retornando um valor fixo para a previsão do tempo. Não seria mais interessante se retornássemos um valor real, através da consulta de uma API de clima?

Existem várias APIs de clima gratuitas, e você pode escolher a que preferir. Uma possibilidade é utilizar a [Open-Meteo](https://open-meteo.com/), que permite requisições sem a necessidade de criar uma chave.

A Open-Meteo possui duas rotas que podem ser úteis para você:

- [Geocoding](https://open-meteo.com/en/docs/geocoding-api): recebe o nome de uma cidade e retorna a latitude e longitude
- [Forecast](https://open-meteo.com/en/docs): recebe a latitude e longitude, e retorna informações sobre o clima

Para fazer a consulta, você pode utilizar qualquer biblioteca Java que quiser. Mas sugerimos que você tente utilizar a Spring Web, para começar a explorar mais o universo Spring. Um bom lugar para começar é [neste](https://spring.io/guides/gs/consuming-rest/) tutorial oficial do Spring.

</details>

<details>
<summary><strong> 🗣 Nos dê feedbacks sobre o exercício!</strong></summary>

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o [formulário](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/java-0x-exercicio-relatorio-de-clima).
**Leva menos de 3 minutos!**

</details>

---

<!-- mdi versão 1.0 exercício como projeto ⚠️ não exclua esse comentário -->
