# User Order Management

Este projeto é um exemplo simples de gerenciamento de pessoas usuárias e pedidos em Java usando Spring Boot, JPA (Hibernate), MySQL e Docker. O projeto demonstra um relacionamento 1:N entre as entidades `User` e `Order`, com endpoints REST para manipulação e filtragem de dados baseados em campos de data.

## Funcionalidades

- CRUD para usuários
- CRUD para pedidos
- Filtragem de pedidos por data

## Tecnologias Utilizadas

- Java 17
- Spring Boot
- Spring Data JPA (Hibernate)
- Docker e docker-compose
- MySQL Database
- H2 Database
- Maven

## Endpoints

### User Endpoints

- **GET /users**: Retorna todos os `User`
- **GET /users/{userId}**: Retorna um `User` por Id
- **POST /users**: Cria um novo `User`
- **POST /users/{userId}/orders**: Cria um novo `Order`

### Order Endpoints

- **GET /orders**: Retorna todos os `Order`
- **GET /orders/lastMonth**: Retorna os `Order` dos últimos 30 dias

## Perfis de Ambiente

A configuração do projeto utiliza perfis para adaptar o comportamento da aplicação a diferentes ambientes.

### Perfil `dev`

Perfil padrão para desenvolvimento local.

- **Características:**
  - Conexão com o banco de dados local ou via variável de ambiente.
  - Utiliza um seeder para inserir dados iniciais.

### Perfil `prod`

Perfil para produção, o docker-compose do projeto utiliza esse perfil por padrão.

- **Características:**
  - Este perfil não popula o banco de dados, para popular, descomente a linha `@Profile("dev")` no arquivo `com.betrybe.userorder.seed`.

### Perfil `test`

Perfil específico para testes unitários e de integração.

- **Características:**
  - Utiliza um banco de dados em memória H2 para isolar os testes.