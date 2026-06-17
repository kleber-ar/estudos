# Regra de Progressão

Boas-vindas ao repositório do projeto `Regra de Progressão`.  

Para realizar o projeto, atente-se a cada passo descrito a seguir! #vqv 🚀

Aqui, você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto com base nesse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes
do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

## Entregáveis

<details>
  <summary>🤷🏽‍♀️ Como entregar</summary><br />

Para entregar o seu projeto, você deverá criar um _Pull Request_ nesse repositório.

Lembre-se de que você pode consultar nosso conteúdo
sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79)
e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que
precisar!
</details>

<details>
  <summary>👨‍💻 O que deverá ser desenvolvido</summary><br />

Descubra seu caminho para o sucesso com a Trybe!

Na Trybe, uma escola inovadora, nossas avaliações são conduzidas em períodos de 21 dias, repletos de desafios e oportunidades de aprendizado. Cada período é composto de uma variedade de seções instigantes, abrangendo conteúdos teóricos e atividades práticas que avaliam o seu progresso. Projetos empolgantes, exercícios envolventes, quizzes instigantes e atividades de carreira, além de propor situações reais de mercado para o desenvolvimento de habilidades pessoais, compõem a trilha para o seu crescimento profissional.

A cada período, o objetivo da pessoa estudante é alcançar 85% dos pontos adiquiridos nas atividades avaliativas. Cada uma dessas atividades vale até 100%, porém cada atividade com um peso diferente. Isto é, a nota final é uma média ponderada de todas as atividades avaliativas do período. É com essa pontuação que você avança na formação, alcançando novos patamares de conhecimento e habilidades.

Ao final de cada período, duas possibilidades se abrem diante de você: a Aprovação ou a Reprovação. Seu desempenho determinará qual caminho seguir. Atingindo a pontuação mínima exigida para o período, você conquista a Aprovação, avançando para o próximo período e prosseguindo com sua turma. É um passo à frente em direção ao seu sucesso!

Porém, caso não alcance a pontuação mínima, não se preocupe! A Reprovação não é um obstáculo, mas uma oportunidade de aprimoramento. Você poderá refazer o mesmo período na próxima turma disponível, fortalecendo seus conhecimentos e suas habilidades até alcançar a Aprovação desejada.

E agora, a grande novidade! Para facilitar sua jornada e auxiliar na gestão das atividades avaliativas, iremos implementar um programa em Java com uma interface intuitiva no terminal, que permitirá:

a. Cadastrar atividades avaliativas para o período, seja exercícios ou projetos. Assim, você terá um controle completo sobre suas tarefas e metas.

b. Inserir as notas dos exercícios e projetos cadastrados para o período. O programa calculará automaticamente o percentual alcançado, revelando seu desempenho de forma nítida e objetiva.

c. Com base no percentual alcançado, você descobrirá se foi aprovado ou reprovado. A mágica acontece quando você supera o limite de 85%. É a sua passagem para o próximo período, uma conquista a ser comemorada!

Chegou a hora de embarcar nesse projeto desafiador e inspirador na Trybe! O programa em Java será seu aliado nessa caminhada, tornando seu aprendizado ainda mais dinâmico e empolgante.

Prepare-se para abraçar o futuro e transformar sua vida. Aventure-se, aprenda e alcance o sucesso com a gente!

</details>

<details>
  <summary><strong>📝 Habilidades a serem trabalhadas</strong></summary>

Neste exercício, verificamos se você é capaz de:

- `Lembrar`
  Será necessário lembrar os conceitos e as instruções relacionados ao programa em Java, bem como as regras e as etapas do sistema de avaliação da Trybe.

- `Compreender`
  Será necessário compreender os requisitos e as funcionalidades do programa em Java, assim como a lógica por trás do cálculo do percentual alcançado.

- `Aplicar`
  Será necessário aplicar seus conhecimentos em programação Java para desenvolver o programa que permite cadastrar atividades, inserir notas e calcular o percentual alcançado.

- `Analisar`
  Durante o desenvolvimento do programa, a pessoa estudante analisará diferentes casos de uso e situações para garantir que o programa funcione corretamente em diversas circunstâncias.

- `Avaliar`
  A avaliação das notas e dos cálculos do percentual alcançados permitirá à pessoa estudante que avalie o próprio desempenho e determine se ela foi aprovada ou reprovada.

- `Criar`
  A criação do programa em Java em si é um ato criativo, em que a pessoa estudante construirá um sistema funcional que atende aos requisitos estabelecidos.

- `Solucionar problemas`
  Durante o desenvolvimento do programa, podem surgir desafios e problemas que exigirão habilidades de resolução de problemas para identificar e corrigir os erros.

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

3. Crie uma branch com base na branch `main`

- Verifique que você está na branch `main`
    - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
- Agora, crie uma branch à qual você vai submeter os `commits` do seu projeto:
    - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`;
    - Exemplo: `git checkout -b maria-soares-lessons-learned`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:

- Verifique que você está na raiz do projeto:
    - Exemplo: `pwd` -> o retorno vai ser algo tipo
      _/Users/maria/code/**sd-0x-project-lessons-learned**_
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
        - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin maria-soares-lessons-learned`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_
  do [repositório no GitHub](https://github.com/tryber/sd-0x-project-lessons-learned/pulls).
    - Clique no botão verde _"New pull request"_.
    - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**.
- Coloque um título para o seu _Pull Request_.
    - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_.

- Adicione uma descrição para o _Pull Request_, um título nítido que o identifique, e clique no
  botão verde _"Create pull request"_

 <img width="1335" alt="Exemplo de pull request" src="https://user-images.githubusercontent.com/42356399/166255109-b95e6eb4-2503-45e5-8fb3-cf7caa0436e5.png">

- Volte até a [página de _Pull
  Requests_ do repositório](https://github.com/tryber/sd-0x-project-lessons-learned/pulls) e confira
  que o seu _Pull Request_ está criado.

</details>

<details>

<summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

Faça `commits` das alterações que você fizer no código regularmente, pois, assim, você garante
visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho. :) 

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto.
- Os comandos que você utilizará com mais frequência são:
    - `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde -
      no stage)_;
    - `git add` _(para adicionar arquivos ao stage do Git)_;
    - `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
    - `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na
      primeira vez que fizer o `push` de uma nova branch)_;
    - `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
<summary><strong>🎛 Checkstyle</strong></summary>

Para garantir a qualidade do código, vamos utilizar nesse projeto o `Checkstyle`. Assim, o código
estará alinhado às boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!
Para poder rodar o `Checkstyle`, certifique-se de ter executado o comando `mvn install` dentro do
repositório.

Para rodá-los localmente no repositório, execute os comandos abaixo:

```bash
mvn checkstyle:check
```

Se a análise do `Checkstyle` encontrar problemas no seu código, tais problemas serão mostrados no
seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `Checkstyle` na sua `IDE`. Para isso, volte na primeira seção
do conteúdo.

⚠️ **PULL REQUESTS COM ISSUES NO `Checkstyle` NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES
DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
<summary><strong>🛠 Testes</strong></summary>


Para executar todos os testes, basta rodar o comando:

```bash
mvn test
```

Para executar apenas uma classe de testes:

```bash
mvn test -Dtest="TestClassName"
```

</details>

## Dicas para mandar bem!

> 1. Evite o uso de atributos e métodos estáticos em sua implementação, esses poderão impactar diretamente a saída dos testes já que os valores serão armazenados na classe e não em seus objetos;
> 2. Evite utilizar múltiplas instâncias da classe Scanner, pois poderão conflitar uma com a outra;
> 3. Utilize, sempre que possível, o método nextLine() associado à classe Scanner e realize a conversão do tipo de dado da entrada (String) para o tipo de dado da variável onde a entrada será armazenada (int, float, etc.);
> 4. Evite utilizar os métodos `next()`, `nextInt()`, `nextDouble()`, entre outros. Pois esses métodos, sozinhos, não conseguem representar o fluxo de operação em um terminal, não consumindo novas linhas quando simulamos a utilização da tecla `Enter` durante a execução dos testes.

## Requisitos do projeto

### 1 - Cadastrar atividades avaliativas

<details>
  <summary>Descrição</summary><br />

Como regra de negócio, você deve permitir à pessoa estudante cadastrar as atividades avaliativas para o 
período atual, que podem ser do tipo exercícios ou projetos. Cada atividade deve ter um nome descritivo que 
identifique sua natureza e um peso atribuída a ela. Certifique-se de que a pessoa estudante possa cadastrar 
quantas atividades forem necessárias, para que todas sejam levadas em consideração no cálculo do percentual 
alcançado. É necessário que a soma de todos os pesos seja igual a 100.

A nota final da pessoa estudante é dada pela fórmula:

$` {(Peso1*Nota1) + (Peso2*Nota2) + ... + (PesoN*NotaN)\over(Peso1 + Peso2 + ... + PesoN)} = NotaFinal `$

O programa deve seguir as seguintes regras:

- Exibir a mensagem `Digite a quantidade de atividades para cadastrar: ` para saber quantas atividades serão cadastradas para o período e salvar essa informação.
- Dado o número de atividades, repetir as mensagens `Digite o nome da atividade N: ` e `Digite o peso da atividade N:`  para salvar o nome da atividade e seu respectivo peso, sendo N o número da atividade.

_**Nota: As mensagens devem ser EXATAMENTE iguais como sugerido, caso contrario os testes irão falhar**_

Exemplo:

```bash
Digite a quantidade de atividades para cadastrar:
3
Digite o nome da atividade 1:
Projeto Lista de Tarefas
Digite o peso da atividade 1: 
30
Digite o nome da atividade 2:
Projeto Lista de Compras
Digite o peso da atividade 2: 
30
Digite o nome da atividade 3:
Projeto Jogo de Advinhação
Digite o peso da atividade 3: 
40
```

</details>

---

### 2 - Inserir as notas obtidas

<details>
  <summary>Descrição</summary><br />

Para cumprir este requisito, a pessoa estudante precisa ter a capacidade de inserir as notas obtidas em cada exercício ou projeto onde acabou de cadastrar seu nome e peso para o período em questão. Essas notas devem ser armazenadas para posteriormente às atividades correspondentes. Certifique-se de que o programa permita a inserção das notas de forma nítida e intuitiva, para que a pessoa estudante possa registrar sua pontuação em cada atividade avaliativa.

Em outras palavras:

- Repita para cada atividade cadastrada no período a mensagem `Digite a nota obtida para [Nome da Atividade]:` para obter sua respectiva nota.

Exemplo: continuando o exemplo anterior.

```bash
Digite a quantidade de atividades para cadastrar:
3
Digite o nome da atividade 1:
Projeto Lista de Tarefas
Digite o peso da atividade 1: 
30
Digite a nota obtida para Projeto Lista de Tarefas:
22
Digite o nome da atividade 2:
Projeto Lista de Compras
Digite o peso da atividade 2: 
30
Digite a nota obtida para Projeto Lista de Compras:
30
Digite o nome da atividade 3:
Projeto Jogo de Advinhação
Digite o peso da atividade 3: 
40
Digite a nota obtida para Projeto Jogo de Advinhação:
35
```

</details>

---
### 3 - Verificar se a soma dos pesos é igual a 100
<details>
<summary>Descrição</summary><br />

Seguindo a regra de negócio definida anteriormente, a soma dos pesos da atividade deve ser igual 100. Crie uma verificação
para as somas dos pesos.

Por exemplo, suponhamos que temos três atividades avaliativas em um determinado período: o exercício alfa com peso 40,
o exercício beta com peso 10 e o projeto gama com peso 60. Observe que a soma de todos os pesos (40+10+60 = 110)
excede o valor acordado. Da mesma forma, se tivéssemos exercícios cuja soma dos pesos fosse inferior a 100,
também estaríamos violando a nossa regra de negócio.

Em cenários como esses, a seguinte mensagem deve ser exibida na tela da pessoa usuária:

```bash
A soma dos pesos é diferente de 100!
```

</details>

---
### 4 - Informar o resultado alcançado 

<details>
  <summary>Descrição</summary><br />

Este requisito será abordado em duas etapas distintas. Na primeira, analisaremos a corretude do retorno no caso de aprovação da pessoa estudante. Na segunda, focaremos na verificação do retorno quando a pessoa estudante é reprovado. Com dois teste separados.

<details>
  <summary>4.1 Aprovação</summary><br />

A fim de avaliar o desempenho da pessoa estudante, é necessário calcular o percentual alcançado com base nas notas
obtidas nas atividades avaliativas cadastradas. Após inserir todas as notas, o programa deve realizar o cálculo 
automático do percentual alcançado, considerando o peso de cada atividade. Depois, compare esse percentual 
com o valor de referência de **85.0%**. Se o percentual for igual ou superior a **85.0%**, ela será aprovada.

Em outras palavras:

- Após calcular o resultado considerando a nota de todas as atividades, utilize a mensagem:
- `Parabéns! Você alcançou [resultado]%! E temos o prazer de informar que você obteve aprovação!`; ou

Exemplo:

```bash
Parabéns! Você alcançou 87.0%! E temos o prazer de informar que você obteve aprovação! 
```
</details>

<details>
<summary>4.2 Reprovação</summary><br />

Por outro lado, compare o percentual com o valor de referência de **85.0%**. Se o percentual for menor que **85.0%**,
a pessoa estudante será considerada reprovada.

Assim:

- Após calcular o resultado considerando a nota de todas as atividades, utilize a mensagem:

- `Lamentamos informar que, com base na sua pontuação alcançada neste período, [resultado]%, você não atingiu a pontuação mínima necessária para sua aprovação`.


```bash
Lamentamos informar que, com base na sua pontuação alcançada neste período, 70.0%, você não atingiu a pontuação mínima necessária para sua aprovação.
```
</details>

<details>
<summary>Exemplo</summary><br />
Exemplo: continuando os exemplos anteriores.

```bash
Digite a quantidade de atividades para cadastrar:
3
Digite o nome da atividade 1:
Projeto Lista de Tarefas
Digite o peso da atividade 1: 
30
Digite a nota obtida para Projeto Lista de Tarefas:
22
Digite o nome da atividade 2:
Projeto Lista de Compras
Digite o peso da atividade 2: 
30
Digite a nota obtida para Projeto Lista de Compras:
30
Digite o nome da atividade 3:
Projeto Jogo de Advinhação
Digite o peso da atividade 3: 
40
Digite a nota obtida para Projeto Jogo de Advinhação:
35
Lamentamos informar que, com base na sua pontuação alcançada neste período, 29.6%, você não atingiu a pontuação mínima necessária para sua aprovação.
```
</details>

</details>

---
<details>
<summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary>

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o
formulário.
**Leva menos de 3 minutos!**

[Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH1&template=betrybe/java-0x-projeto-regra-progressao)

</details>

<details>
<summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

Você sabia que o LinkedIn é a principal rede social profissional? Por isso, compartilhar o seu aprendizado lá
é muito importante para quem deseja construir uma carreira de sucesso. Compartilhe esse projeto no
seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

---

