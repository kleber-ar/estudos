# Boas-vindas ao repositório do Kotlin Playground 1

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

    * Use o comando: `git clone git@github.com:betrybe/sd-001-exercise-kotlin-playground-1.git`
    * Entre na pasta do repositório que você acabou de clonar:
        * `cd sd-001-exercise-kotlin-playground-1.git`

2. Crie uma branch a partir da branch `main`

    * Verifique que você está na branch `main`
        * Exemplo: `git branch`
    * Se não estiver, mude para a branch `main`
        * Exemplo: `git checkout main`
    * Crie uma branch à qual você vai submeter os `commits` de seu exercício
        * Você deve criar uma branch no seguinte formato: `nome-sobrenome-kotlin-playground-1`
        * Exemplo: `git checkout -b joaozinho-sauro-kotlin-playground-1`

3. Adicione as mudanças ao _stage_ do Git e faça um `commit`

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

4. Adicione a sua branch com o novo `commit` ao repositório remoto

    * Usando o exemplo anterior: `git push -u origin joaozinho-sauro-kotlin-playground-1`

5. Crie um novo `Pull Request` _(PR)_

    * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/sd-001-exercise-kotlin-playground-1/pulls)
    * Clique no botão verde _"New pull request"_
    * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Adicione uma descrição para o Pull Request, um título que o identifique, e clique no botão verde "Create pull request". Crie da seguinte forma: `[JOAOZINHO] Kotlin Playground 1`
    * Adicione uma descrição para o Pull Request, um título nítido que o identifique, e clique no botão verde _"Create pull request"_
    * **Não se preocupe em preencher mais nada por enquanto!**
    * Volte até a [página de _Pull Requests_ do repositório](https://github.com/betrybe/sd-001-exercise-kotlin-playground-1/pulls) e confira se o seu _Pull Request_ está criado

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

* Implemente as funções dos arquivos `Req{N}.kt` que está no diretório `src`. Você pode criar outras funções de auxílio, entretanto, **você deve utilizar as funções com os nomes que estão nos arquivos, pois estas que serão avaliadas.**

**De olho na dica 👀**:

* Utilize `print()` ou `println()` para testar as funções localmente.

</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />
Todos os requisitos do exercício serão testados automaticamente por meio do JUnit.

Para rodar o avaliador automático localmente no seu exercício, execute um dos comandos abaixo:

Para executar todos os testes utilize:

```bash
./gradlew test
```

**ou**:

```bash
./gradlew test --tests Req01Test
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

# Requisitos

## 1 - Implemente a função para calcular o preço de um produto com desconto de 10%

Escreva um programa em Kotlin que receba o preço de um produto, calcule e mostre o novo preço, sabendo-se que este sofreu um desconto de 10%.

<details>

<summary>Detalhes 🔍 </summary>

</br>

* A função `calculateDiscount` recebe um decimal como parâmetro e deve retornar um decimal com o valor com desconto.

</details>

<details>

<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateDiscount` deve retornar o valor `90.0` quando receber como parâmetro o valor `100.0`;


</details>

> 👀 De olho na dica: Use `readLine()` para capturar entrada do usuário no console em Kotlin. A função lê uma linha de texto, retornando uma string. Ao aplicar toDoubleOrNull(), é possível converter a entrada em um valor numérico do tipo Double, proporcionando interatividade ao atribuir diferentes valores à variável `price` a cada execução. 🚀

## 2 - Implemente cada função para calcular a comissão e o salário final de um funcionário

Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Escreva um programa em Kotlin que receba o salário fixo do funcionário e o valor de suas vendas, calcule e mostre a comissão e seu salário final.

<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateCommission` recebe um decimal como parâmetro e deve retornar um decimal com o valor da comissão.<br />
* A função `calculateFinalSalary` recebe dois decimais como parâmetro e deve retornar um decimal com o valor final do salário.


</details>

<details>
   
<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateCommission` deve retornar o valor `40.0` quando receber como parâmetro o valor `1000.0`;
* A função `calculateFinalSalary` deve retornar o valor `1040.0` quando receber `baseSalary` sendo `1000.0` e o `commission` sendo `40.0`;

</details>

## 3 - Implemente cada função para calcular a idade da pessoa em anos, meses, dias e semanas

Escreva um programa em Kotlin que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
- a idade dessa pessoa em anos
- a idade dessa pessoa em meses
- a idade dessa pessoa em dias
- a idade dessa pessoa em semanas

<details>

<summary>Detalhes 🔍</summary>
</br>

* A função `calculateYears` recebe dois inteiros como parâmetro e deve retornar um inteiro com o valor em anos.<br />
* A função `calculateMonths` recebe dois inteiros como parâmetro e deve retornar um inteiro com o valor em meses.<br />
* A função `calculateDays` recebe dois inteiros como parâmetro e deve retornar um inteiro longo com o valor em dias.<br />
* A função `calculateWeeks` recebe dois inteiros como parâmetro e deve retornar um inteiro longo com o valor semanas.

</details>

<details>

<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateYears` deve retornar o valor `33` quando receber `birthYear` sendo `1990` e o `currentYear` sendo `2023`;
* A função `calculateMonths` deve retornar o valor `396` quando receber `birthYear` sendo `1990` e o `currentYear` sendo `2023`;
* A função `calculateDays` deve retornar o valor `12053` quando receber `birthYear` sendo `1990` e o `currentYear` sendo `2023`;
* A função `calculateWeeks` deve retornar o valor `1721` quando receber `birthYear` sendo `1990` e o `currentYear` sendo `2023`;

</details>

## 4 - Implemente cada função para calcular a média, diferença, produto e divisão entre os dois números

Escreva um programa que receba dois números e execute as operações listadas a seguir, conforme a escolha da pessoa usuária.

| ESCOLHA DA PESSOA USUÁRIA | OPERAÇÃO                           |
|---------------------------|------------------------------------|
| 1                         | Média entre os números digitados   |
| 2                         | Diferença do maior pelo menor      |
| 3                         | Produto entre os números digitados |
| 4                         | Divisão do primeiro pelo segundo   |


<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateAverage` recebe dois decimais como parâmetro e deve retornar um decimal com a média entre os números.<br />
* A função `calculateDifference` recebe dois decimais como parâmetro e deve retornar um decimal com a diferença do maior pelo menor.<br />
* A função `calculateProduct` recebe dois decimais como parâmetro e deve retornar um decimal com o produto entre os números digitados.<br />
* A função `calculateDivision` recebe dois decimais como parâmetro e deve retornar um decimal ou null com a divisão do primeiro pelo segundo se possível.

</details>

<details>
   
<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateAverage` deve retornar o valor `15.0` quando receber como primeiro parâmetro `10.0` e como segundo `20.0`;<br />
* A função `calculateDifference` deve retornar o valor `10.0` quando receber como primeiro parâmetro `20.0` e como segundo `10.0`;<br />
* A função `calculateDifference` deve retornar o valor `10.0` quando receber como primeiro parâmetro `10.0` e como segundo `20.0`;<br />
* A função `calculateProduct` deve retornar o valor `20.0` quando receber como primeiro parâmetro `5.0` e como segundo `4.0`;<br />
* A função `calculateDivision` deve retornar o valor `5.0` quando receber como primeiro parâmetro `10.0` e como segundo `2.0`;<br />
* A função `calculateDivision` deve retornar o valor `null` quando receber como primeiro parâmetro `10.0` e como segundo `0.0`;<br />

</details>

## 5 - Implemente a função para calcular o custo final de um carro

O preço final de um carro novo é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos, ambos aplicados ao custo de fábrica. As porcentagens encontram-se na tabela a seguir. Escreva um programa em Kotlin que receba o custo de fábrica de um carro e mostre o preço ao consumidor.

| CUSTO DE FÁBRICA                    | PORCENTAGEM DO DISTRIBUIDOR | PORCENTAGEM DOS IMPOSTOS |
|-------------------------------------|-----------------------------|--------------------------|
| Até R$ 12.000,00                    | 5%                          | isento                   |
| Entre R$ 12.000,01 até R$ 25.000,00 | 10%                         | 15%                      |
| Acima de R$ 25.000,00               | 15%                         | 20%                      |

<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateConsumerPrice` recebe um decimal como parâmetro e deve retornar um decimal com o preço ao consumidor.

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* A função `calculateConsumerPrice` deve retornar o valor `10500.0` quando receber como parâmetro `10000.0`;<br />
* A função `calculateConsumerPrice` deve retornar o valor `18750.0` quando receber como parâmetro `15000.0`;<br />
* A função `calculateConsumerPrice` deve retornar o valor `40500.0` quando receber como parâmetro `30000.0`;<br />

</details>

## 6 - Implemente a função para receber um salário e calcular a porcentagem de aumento

Escreva um programa em Kotlin que receba o salário de uma pessoa colaboradora e, usando a tabela a seguir, calcule e mostre o novo salário.

| FAIXA SALARIAL                  | PORCENTAGEM DE AUMENTO |
|---------------------------------|------------------------|
| Até R$ 300,00                   | 50%                    |
| Entre R$ 300,01 até R$ 500,00   | 40%                    |
| Entre R$ 500,01 até R$ 700,00   | 30%                    |
| Entre R$ 700,01 até R$ 800,00   | 20%                    |
| Entre R$ 800,00 até R$ 1.000,00 | 10%                    |
| Acima de R$ 1.000,00            | 5%                     |

<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateNewSalary` recebe um decimal como parâmetro e deve retornar um decimal com o valor do novo salário.

</details>

<details>

<summary>O que será testado 🧪 </summary>
</br>

* A função `calculateNewSalary` deve retornar o valor `300.0` quando receber como parâmetro `200.0`;<br />
* A função `calculateNewSalary` deve retornar o valor `560.0` quando receber como parâmetro `400.0`;<br />
* A função `calculateNewSalary` deve retornar o valor `780.0` quando receber como parâmetro `600.0`;<br />
* A função `calculateNewSalary` deve retornar o valor `900.0` quando receber como parâmetro `750.0`;<br />
* A função `calculateNewSalary` deve retornar o valor `990.0` quando receber como parâmetro `900.0`;<br />
* A função `calculateNewSalary` deve retornar o valor `1260.0` quando receber como parâmetro `1200.0`;<br />

</details>

## 7 - Implemente cada função para calcular a média das idades, a quantidade de pessoas com peso superior a 90Kg e altura inferior a 1.50m e a porcentagem de pessoas com idade entre 10 e 30 anos que medem mais de 1.90 metros de uma lista de idades, pesos e alturas

Escreva um programa em Kotlin que receba uma lista de idades, pesos e alturas, calcule e mostre:
- a média das idades das pessoas.
- a quantidade de pessoas com peso superior a 90 kg e altura inferior a 1,50 m.
- a porcentagem de pessoas com idade entre 10 e 30 anos que medem mais de 1,90 m.

<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateAverage` recebe uma lista de inteiros e deve retornar um decimal com o valor da média das idades.<br />
* A função `countPeopleWeightHeight` recebe duas listas de decimais e deve retornar um inteiro com a quantidade de pessoas.<br />
* A função `calculatePercentageAgeHeight` recebe uma lista de interiors e outra lista de decimais e deve retornar um inteiro sendo a porcentagem de pessoas.

</details>

<details>
   
<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateAverage` deve retornar o valor `35.0` quando receber como parametro uma lista `25, 30, 35, 40, 45`;
* A função `countPeopleWeightHeight` deve retornar o valor `1` quando receber no primeiro parametro `weights` uma lista `80.0, 95.0, 70.0, 100.0, 98.0` e no segundo parametro `heights` uma lista `1.95, 1.96, 1.60, 1.96, 1.45`;
* A função `calculatePercentageAgeHeight` deve retornar o valor `40` quando receber no primeiro parametro `ages` uma lista `25, 30, 35, 40, 45` e no segundo parametro `heights` uma lista `1.95, 1.96, 1.60, 1.96, 1.45`;

</details>

## 8 - Implemente cada função para calcular a soma dos números pares e dos números ímpares

Escreva um programa em Kotlin que receba dez números, calcule e mostre a soma dos números pares e a soma dos números ímpares.

<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateSumEven` recebe uma lista de inteiros e deve retornar um inteir com o valor da soma.<br />
* A função `calculateSumOdd` recebe uma lista de inteiros e deve retornar um inteir com o valor da soma.

</details>

<details>
   
<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateSumEven` deve retornar o valor `30` quando receber como parametro uma lista `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`;
* A função `calculateSumOdd` deve retornar o valor `25` quando receber como parametro uma lista `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`;

</details>

## 9 - Implemente a função para calcular o valor de um carro à vista e a prazo

Escreva um programa em Kotlin que receba o valor de um carro e mostre uma tabela com os seguintes dados: preço final, quantidade de parcelas e valor da parcela. Considere o seguinte:
- o preço final para compra à vista tem desconto de 20%
- a quantidade de parcelas pode ser: 12, 24, 36, 48 e 60
- os percentuais de acréscimo encontram-se na tabela a seguir

| QUANTIDADE DE PARCELAS | PERCENTUAL DE ACRÉSCIMO SOBRE O PREÇO FINAL |
|------------------------|---------------------------------------------|
| 12                     | 6%                                          |
| 24                     | 12%                                         |
| 36                     | 18%                                         |
| 48                     | 24%                                         |
| 60                     | 30%                                         |


<details>

<summary>Detalhes 🔍 </summary>
</br>

* A função `calculateFinalPrice` recebe um parametro decimal, um parametro inteiro, uma lista de decimais e deve retornar um decimal com o valor do carro.

</details>

<details>
   
<summary>O que será testado 🧪 </summary>

</br>

* A função `calculateFinalPrice` deve retornar o valor `20000.0` quando receber no parametro `carValue` o valor `25000.0`, no parametro `installment` o valor `1` referente a quantidade de parcelas e no parametro `surcharges` uma lista `0.06, 0.12, 0.18, 0.24, 0.30` referente ao percentual de acréscimo;
* A função `calculateFinalPrice` deve retornar o valor `26500.0` quando receber no parametro `carValue` o valor `25000.0`, no parametro `installment` o valor `12` referente a quantidade de parcelas e no parametro `surcharges` uma lista `0.06, 0.12, 0.18, 0.24, 0.30` referente ao percentual de acréscimo;
* A função `calculateFinalPrice` deve retornar o valor `28000.0` quando receber no parametro `carValue` o valor `25000.0`, no parametro `installment` o valor `24` referente a quantidade de parcelas e no parametro `surcharges` uma lista `0.06, 0.12, 0.18, 0.24, 0.30` referente ao percentual de acréscimo;
* A função `calculateFinalPrice` deve retornar o valor `29500.0` quando receber no parametro `carValue` o valor `25000.0`, no parametro `installment` o valor `36` referente a quantidade de parcelas e no parametro `surcharges` uma lista `0.06, 0.12, 0.18, 0.24, 0.30` referente ao percentual de acréscimo;
* A função `calculateFinalPrice` deve retornar o valor `31000.0` quando receber no parametro `carValue` o valor `25000.0`, no parametro `installment` o valor `48` referente a quantidade de parcelas e no parametro `surcharges` uma lista `0.06, 0.12, 0.18, 0.24, 0.30` referente ao percentual de acréscimo;
* A função `calculateFinalPrice` deve retornar o valor `32500.0` quando receber no parametro `carValue` o valor `25000.0`, no parametro `installment` o valor `60` referente a quantidade de parcelas e no parametro `surcharges` uma lista `0.06, 0.12, 0.18, 0.24, 0.30` referente ao percentual de acréscimo;

</details>


## 10 - Implemente cada função para calcular os múltiplos de 2, múltiplos de 3 e os múltiplos de 2 e 3 de um array de 15 números inteiros

Escreva um programa em Kotlin que preencha um array com quinze números inteiros, calcule e mostre:
- os números múltiplos de 2
- os números múltiplos de 3
- os números múltiplos de 2 e de 3

<details>

<summary>Detalhes 🔍 </summary>
</br>


* A função `findMultiplesOf2` recebe uma lista de inteiros e deve retornar uma lista de inteiros múltiplos de 2.<br />
* A função `findMultiplesOf3` recebe uma lista de inteiros e deve retornar uma lista de inteiros múltiplos de 3.<br />
* A função `findMultiplesOf2And3` recebe uma lista de inteiros e deve retornar uma lista de inteiros múltiplos de 2 e de 3.

</details>

<details>
   
<summary>O que será testado 🧪 </summary>

</br>

* A função `findMultiplesOf2` deve retornar a lista `[2, 4, 6, 8, 10, 12, 14]` quando receber como parametro a lista `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]`.<br />
* A função `findMultiplesOf3` deve retornar a lista `[3, 6, 9, 12, 15]` quando receber como parametro a lista `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]`.<br />
* A função `findMultiplesOf2And3` deve retornar a lista `[6, 12]` quando receber como parametro a lista `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]`.

</details>

## 11 - Implemente cada função para calcular a soma dos positivos e a quantidade de números negativos de uma lista com dez números reais

<details>

<summary>Detalhes</summary>

Escreva um programa em Kotlin que preencha uma lista com dez números reais, calcule e mostre a quantidade de números negativos e a soma dos números positivos dessa lista.
A função `countNegativeNumbers` recebe uma lista de decimais e deve retornar um inteiro com a quantidade de números negativos.<br />
A função `calculateSumOfPositiveNumbers` recebe uma lista de inteiros e deve retornar um decimal com a soma dos números positivos.

### O que será testado

* A função `countNegativeNumbers` deve retornar o número `3` quando receber como parametro uma lista de números `-1.0, 2.0, -3.0, 4.0, -5.0`;
* A função `calculateSumOfPositiveNumbers` deve retornar o número `6.0` quando receber como parametro uma lista de números `-1.0, 2.0, -3.0, 4.0, -5.0`;

</details>

## 12 - Implemente a funçao para multiplicar dois números de mesmo índice de uma lista e armazenar em uma terceira lista

<details>

<summary>Detalhes</summary>

Escreva um programa em Kotlin que preencha duas listas com dez números inteiros cada e faça a multiplicação dos elementos de mesmo índice, colocando o resultado em um terceiro vetor. Mostre o vetor resultante.
A função `multiplyLists` recebe no primeiro e segundo parametro uma lista de dez números inteiors, no terceiro parametro recebe uma lista vazia de inteiros e deve adicionar nesta terceira lista os resultados da multiplicação.

### O que será testado

* Será testado se ao passar no primeiro parametro uma lista `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`, no segundo parametro uma lista `10, 9, 8, 7, 6, 5, 4, 3, 2, 1` o valor da lista do terceiro parametro vai ser igual a `10, 18, 24, 28, 30, 30, 28, 24, 18, 10`;

</details>
