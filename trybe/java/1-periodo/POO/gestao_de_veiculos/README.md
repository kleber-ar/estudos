# Gestão de Veículos

Boas-vindas ao repositório do exercício Gestão de Veículos

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

O Sistema de Gestão de Veículos é um exercício desenvolvido em Java que utiliza os conceitos de orientação a objetos, como herança, polimorfismo, interfaces e classes abstratas. O objetivo deste exercício é gerenciar informações e operações relacionadas a diferentes tipos de veículos, como carros, motos e caminhões.

</details>

<details>
  <summary><strong>📝 Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

1. Aplicar o conceito de Orientação a Objetos para desenvolver classes eficazes em Java.
2. Implementar getters e setters em suas classes de programação para acessar e alterar atributos de maneira controlada.
3. Usar o princípio de Encapsulamento para ocultar o estado interno de um objeto, preservando a integridade dos dados.
4. Empregar a Herança para criar novas classes derivadas de classes base, aumentando a reutilização de código e a organização do seu exercício.
5. Demonstrar entendimento de Polimorfismo, permitindo que objetos de diferentes classes sejam tratados como objetos de uma classe comum.
6. Utilizar Interfaces para definir comportamentos que devem ser implementados por classes específicas.
7. E por fim, aplicar o conceito de Classes Abstratas, criando modelos para outras classes herdarem.

Essas competências são essenciais e através deste exercício, esperamos que você possa aprofundar seu entendimento e habilidade em cada um desses tópicos.

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

## 1 - Calcular o consumo de combustível do Carro

<details>
  <summary>Implemente a classe Carro com o método para calcular o consumo de combustível</summary><br />

Para iniciar a implementação do seu exercício, siga os passos a seguir.

1. Crie uma interface `Veiculo.java` que define os métodos que devem ser implementados pelos veículos:

```java
public interface Veiculo {

  double calcularConsumoCombustivel(double distancia);
  void exibirInformacoes();
}
```

2. Crie uma classe abstrata `VeiculoBase.java`: ela implementa a interface `Veiculo` e contém atributos e métodos comuns a todos os veículos:

```java
public abstract class VeiculoBase implements Veiculo{

  private String marca;
  private String modelo;
  private int ano;
  private String tipoCombustivel;
  private int capacidadeTanque;
  
  // métodos, getter's e setter's 
}
```

3. Crie um construtor na `VeiculoBase` que receba todos os atributos definidos.

4. Implemente a classe `Carro.java`, que estende `VeiculoBase` e representa um carro. Na classe você deve:
    - Criar um atributo com o número de passageiros;
    - Criar um construtor que recebe todos os atributos originais da classe `VeiculoBase`, mais o novo atributo;
    - Chamar o construtor da classe abstrata dentro do novo construtor.

5. Implemente na classe `Carro` os métodos definidos na interface:
   - `calcularConsumoCombustivel`: este método deve calcular o consumo de combustível a partir da distância. Considere que o consumo é calculado dividindo a distância por `10`.
   - `exibirInformacoes`: utilize esse método para mostrar informações específicas da classe. Não há necessidade de seguir um formato específico.

</details>

## 2 - Calcular o consumo de combustível do Caminhão

<details>
  <summary>Implemente a classe Caminhão com o método para calcular o consumo de combustível</summary><br />

Para iniciar a implementação do seu exercício, siga os passos a seguir.

1. Implemente a classe `Caminhao.java`, que estende `VeiculoBase` e representa um caminhão. Na classe você deve:
   - Criar um atributo com o número de passageiros;
   - Criar um construtor que recebe todos os atributos originais da classe `VeiculoBase`, mais o novo atributo;
   - Chamar o construtor da classe abstrata dentro do novo construtor.

2. Implemente na classe `Caminhao` os métodos definidos na interface:
   - `calcularConsumoCombustivel`: este método deve calcular o consumo de combustível a partir da distância. Considere que o consumo é calculado dividindo a distância por `6.0`.
   - `exibirInformacoes`: utilize esse método para mostrar informações específicas da classe. Não há necessidade de seguir um formato específico.

</details>

## 3 - Calcular o consumo de combustível da Moto

<details>
  <summary>Implemente a classe Moto com o método para calcular o consumo de combustível</summary><br />

Para iniciar a implementação do seu exercício, siga os passos a seguir.

1. Implemente a classe `Moto.java`, que estende `VeiculoBase` e representa uma moto. Na classe você deve:
   - Criar um atributo com o número de passageiros;
   - Criar um construtor que recebe todos os atributos originais da classe `VeiculoBase`, mais o novo atributo;
   - Chamar o construtor da classe abstrata dentro do novo construtor.

2. Implemente na classe `Moto` os métodos definidos na interface:
   - `calcularConsumoCombustivel`: este método deve calcular o consumo de combustível a partir da distância. Considere que o consumo é calculado dividindo a distância por `18.0`.
   - `exibirInformacoes`: utilize esse método para mostrar informações específicas da classe. Não há necessidade de seguir um formato específico.

</details>

<details>
<summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary>

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[Formulário de avaliação do exercício](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/java-0x-exercicio-gestao-de-veiculos)

</details>
  
<details>
<summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

---

<!-- mdi versão 1.1 exercício ⚠️ não exclua esse comentário -->
