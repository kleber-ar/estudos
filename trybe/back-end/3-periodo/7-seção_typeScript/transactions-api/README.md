# Transactions API

App para gestão financeira desenvolvida no conteúdo do dia BE8.3.

## Como executar?

O arquivo `docker-compose.yml` já define que ao subir o container, a aplicação já seja iniciada por meio do comando `npm run dev`. Portanto, basta executar o comando:

```bash
docker-compose up -d
```

### Dica

Caso tenha conflitos com portas já usadas. Use os comandos:

```bash
killall node # Parar qualquer aplicação node que esteja sendo executados na máquina!
docker stop $(docker ps -qa) # Para containers que estão sendo executados!
```

### Dependências para Testes

```bash
npm i -E -D chai@4.3.6 mocha@9.2.1 sinon@13.0.1 chai-http@4.3.0 sinon-chai@3.7.0 nyc@15.1.0 @types/chai@4.3.0 @types/chai-http@4.2.0 @types/mocha@9.1.0 @types/sinon@10.0.11 @types/sinon-chai@3.2.9
```
