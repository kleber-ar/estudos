# Lista Exercício Orientação a Objetos - Java

Boas-vindas ao repositório do exercício Lista Exercício Orientação a Objetos - Java

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

Esta é uma lista de exercícios, ou seja, cada um dos requisitos que iremos apresentar terá um contexto totalmente diferente entre si.

Nosso objetivo é explorar e praticar a lógica de programação.

</details>

<details>
  <summary><strong>:memo: Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

Utilizar conceitos de abstração para criar classes em Java.

Implementar getters e setters em classes de programação para acessar e modificar atributos.

Utilizar o encapsulamento para ocultar o estado interno de um objeto e a herança para criar classes derivadas de outras classes.

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

### 1. Sistema de Recursos Humanos

<details>
  <summary>Descrição</summary><br />

Neste requisito, você implementará a parte de um sistema de recursos humanos para a Trybe! Sua função é implementar a classe `PessoaFuncionaria` com os atributos privados:

- `nomeCompleto`: esse atributo é do tipo `String`;
- `cpf`: esse atributo é do tipo `String`;
- `endereco`: esse atributo é do tipo `String`;
- `salario`: esse atributo é do tipo `double`;

Implemente seu construtor para que, quando uma nova pessoa funcionária seja contratada na Trybe (o objeto seja instanciado), seus atributos já sejam inicializados. Você deverá também implementar os métodos `Getter`s e `Setter`s, exceto para o atributo `cpf`, imutável, que deve ter somente o método `Getter`.

Requisitos:  
1 - Crie um construtor para a PessoaFuncionaria que receba o nome, CPF, endereço e salário.  
2 - Crie um método getter para o atributo nomeCompleto de PessoaFuncionaria.  
3 - Crie um método setter para o atributo nomeCompleto de PessoaFuncionaria.  
4 - Crie um método getter para o atributo cpf de PessoaFuncionaria.  
5 - Crie um método getter para o atributo endereco de PessoaFuncionaria.  
6 - Crie um método setter para o atributo endereco de PessoaFuncionaria.  
7 - Crie um método getter para o atributo salario de PessoaFuncionaria.  
8 - Crie um método setter para o atributo salario de PessoaFuncionaria.  

  Por exemplo,  
  
Se a nova pessoa contratada for:

- Nome: Maria da Silva;
- CPF: 158.699.457-31;
- Endereço: Rua da Aurora, 118;
- Salário: 15000.

Então o método `Getter` do atributo `cpf` deve retornar 158.699.457-31. Se executarmos o método `Setter` do atributo `salario` passando o valor 20000, o método `Getter` do atributo `salario` deve retornar 20000.0 (já que é do tipo `double`).

</details>

### 2. Conta Poupança

<details>
  <summary>Descrição</summary><br />

Suponha que você está trabalhando em uma equipe responsável pela construção de um sistema bancário e deve desenvolver a classe que representa a conta poupança. Como missão dada é missão cumprida, implemente a classe `ContaPoupanca` do pacote `com.trybe.acc.contapoupanca`, que deve contemplar os seguintes aspectos:

- Atributos:
    - `saldo`: atributo do tipo `double` para armazenar o valor em dinheiro que a conta possui;
    - `titularConta`: atributo do tipo `String` para armazenar o nome da pessoa portadora da conta.

- Métodos:
    - `depositar`: esse método é responsável por receber um valor do tipo `double` e somá-lo ao saldo da conta;
    - `sacar`: esse método é responsável por receber um valor do tipo `double` e subtraí-lo do saldo da conta;
    - `mostrarSaldo`: esse método deve retornar um valor do tipo `double` representando o saldo da conta.
    - `mostrarTitularConta`: esse método deve retornar o nome da pessoa titular da conta.

Essa conta poupança tem duas restrições a serem levadas em conta no seu projeto:

- ela só pode ser aberta se um depósito for feito no momento da sua abertura;
- ela deve ter o nome da pessoa titular da conta.

Requisitos:  
1 - Criar uma classe ContaPoupanca  
2 - Implementar o método 'depositar'  
3 - Implementar o método 'sacar'  
4 - Implementar o método 'mostrarSaldo'  
5 - Implementar o método 'mostrarTitularConta'  

**Dica: use o construtor para adicionar o valor do depósito inicial ao saldo na abertura da conta e o nome da pessoa titular da conta.**

  Por exemplo,  
  
Considerando que uma pessoa abra a conta poupança com o valor inicial de R$ 50, cada método deve se comportar da seguinte maneira:

- `depositar`: supondo que o saldo da conta seja R$ 50 e na chamada do método `depositar` seja passado o valor de R$ 100 como argumento, o método deve somar o valor 100 ao saldo, fazendo o valor do saldo ser atualizado para 150;
- `sacar`: supondo que o saldo da conta seja R$ 50 e na chamada do método `sacar` seja passado o valor de R$ 30 como argumento, o método deve subtrair o valor 30 do saldo, fazendo o valor do saldo ser atualizado para 20;
- `mostrarSaldo`: supondo que o saldo da conta seja R$ 50, então o retorno desse método deve ser 50.
- `mostrarTitularConta`: supondo que o nome da pessoa dona da conta seja Carla Pereira, esse método deve retornar um valor do tipo `String` contendo `Carla Pereira`.
</details>

### 3. Pessoa Usuárias

<details>
  <summary>Descrição</summary><br />
  Na ACME Companhia Limitada os nomes das contas de pessoas usuárias são gerados com o nome e o sobrenome da pessoa separados por um ponto. Crie um sistema que gere o nome de uma pessoa usuária seguindo os seguintes critérios:

  1. uma classe `Pessoa` que possui dois atributos **protegidos**, _nome_ e _sobrenome_.
  2. uma classe `PessoaUsuaria` que deve ter um construtor passando _nome_ e _sobrenome_.
  3. na classe `PessoaUsuaria` deve-se adicionar uma função `getPessoaUsuaria()`, que não recebe nenhum parâmetro, e retorna o nome.sobrenome.

    Requisitos:  
    1 - Valida se usuário executa regra  
    2 - Valida se usuário é sub-classe de pessoa  
    3 - Valida se usuário executa regra com nome nulo  
    4 - Valida se usuário executa regra com sobrenome nulo  
    5 - Valida se usuário executa regra com nome vazio  
    6 - Valida se usuário executa regra com sobrenome vazio  
    7 - Valida se método implementa na sub-classe  
    8 - Valida se método implementado tem nome correto  
    9 - Valida se atributos estão declarados  
    10 - Valida se atributos declarados tem nomes corretos  
  
Por exemplo,  
  
  Iniciei a classe `new PessoaUsuaria("bruce", "wayne")`, então a saída da função `getPessoaUsuaria()` deve ser `bruce.wayne`.

  Iniciei a classe `new PessoaUsuaria(null, "wayne")`, então a saída da função `getPessoaUsuaria()` deve ser `Pessoa usuária inválida`. O mesmo deve ocorrer se o sobrenome for nulo.

  Iniciei a classe `new PessoaUsuaria("", "wayne")`, então a saída da função `getPessoaUsuaria()` deve ser `Pessoa usuária inválida`. O mesmo deve ocorrer se o sobrenome for vazio.


</details>

<details>
<summary><strong> 🗣 Nos dê feedbacks sobre o exercício!</strong></summary>

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o [formulário](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/java-0x-exercicio-lista-poo).
**Leva menos de 3 minutos!**

</details>

---
