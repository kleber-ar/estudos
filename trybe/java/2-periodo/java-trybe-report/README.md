Exercício - API Rest para Gestão de Perdas - Trybe Report

O primeiro passo neste exercício consiste em clonar o repositório da nossa API Trybe Report. É importante mencionar que este exercício não possui avaliador automático, portanto, não é preciso criar uma nova branch e subir o código para o Github. Você terá acesso a duas branches: trybe-report-gabarito, que contém a solução completa dos exercícios, e main, que servirá como base para você desenvolver sua própria implementação, permitindo que a nossa API funcione corretamente.

1 - Implemente o método findExpiredProducts() na ProductService

    Implemente em: src/main/java/com/betrybe/report/service/ProductService.java

O método findExpiredProducts() deverá buscar por produtos vencidos e que poderão ser trocados ou repostos por nossos fornecedores. Lembre-se que para que um produto seja considerado vencido deve ter uma data de validade anterior ao dia de hoje.
2 - Implemente o método findNonExpiredProducts() na ProductService

    Implemente em: src/main/java/com/betrybe/report/service/ProductService.java

Agora iremos implementar a contraparte do exercício anterior: os produtos que ainda não venceram. Esses terão que ter uma data de validade superior ao dia de hoje.
3 - Implemente o método findExpiresAtProducts() na ProductService

    Implemente em: src/main/java/com/betrybe/report/service/ProductService.java

Agora você receberá um intervalo de datas e verificar os produtos que tem vencimento nesse intervalo (start e end), isso permitirá a equipe de vendas a trabalhar em promoções ou agilizar a trocar desses produtos com nossos fornecedores.
4 - Adicione validações aos campos da entidade Product

    Implemente em: src/main/java/com/betrybe/report/entity/Product.java

Adicione anotações de validação na entidade Product para garantir que os campos name, manufactureDate e expirationDate estejam corretamente preenchidos.
5 - Adicione um método para tratar erros de validação no ControllerAdvice

    Implemente em: src/main/java/com/betrybe/report/controller/advice/GeneralControllerAdvice.java

Adicione um método no GlobalControllerAdvice para tratar erros de validação e retornar mensagens de erro apropriadas.
Vamos testar nossa API?

Está com tudo implementado? Chegou a hora de testar nossa API.

Basta executar nossa classe principal, a TrybeReport. Mas e o banco?

O banco para esta aplicação é o H2, um banco em memória, com suas definições especificadas no arquivo application.properties dentro do diretório resources.

O Spring automaticamente criará nossas tabelas e colocará nossa aplicação no ar através do container de aplicação Tomcat.

De posse de um cliente Rest API (Thunder client, Postman, Insomnia, entre outros) você poderá realizar requisições ao <http://localhost:8080/aqui-voce-especifica-a-rota>. Além disso, você pode ver quais as rotas disponíveis em nossa API através deste link - É importante que a API esteja rodando!
