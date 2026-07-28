# java-playlist

Exercício - Adicione a camada de segurança em uma API Rest para Gerenciamento de Músicas e Playlists

O primeiro passo para este exercício consiste em clonar o repositório da nossa API de Gerenciamento de Músicas e Playlists. É importante mencionar que este exercício não possui avaliador automático então não é preciso criar uma nova branch e subir para o Github. Nesse repositório, você terá três branches à disposição: main, onde você deverá fazer sua própria implementação para que segurança na nossa API possa funcionar, exercise-spring-security-part-1 com a resolução dos exercícios do dia 1 e exercise-spring-security-part-2 com a resolução dos exercícios do dia 2.
Exercício 1 - Adicione o Spring Security ao Projeto

Antes de iniciarmos a adição da camada de segurança a nossa API é importante que você insira as dependências necessárias no nosso pom.xml para que tudo corra bem.
Exercício 2 - A partir da nossa entidade Person implemente UserDetails

Implemente em: src/main/java/com/betrybe/playlist/entity/Person.java

A classe Person deve implementar a interface UserDetails e, com ela, seus métodos. É importante que você atualize cada um desses métodos para que não fiquem apenas com valores padrão em seu retorno.
Exercício 3 - A partir da classe PersonService implemente UserDetailsService

Implemente em: src/main/java/com/betrybe/playlist/service/PersonService.java

O método loadUserByUsername que virá da interface deverá ser finalizado. Além disso, você deve adicioná-lo a PersonRepository para que possamos buscar uma pessoa em nossa base de dados através do seu username.

    Não esqueça de modificar o método insert para que antes de salvarmos uma pessoa no banco criptografemos sua senha.

Exercício 4 - Adicione novas implementações na SecurityConfig

Implemente em: src/main/java/com/betrybe/playlist/security/SecurityConfig.java

Já disponibilizamos a SecurityConfig parcialmente implementada. É preciso, porém, que você implemente os beans authenticationManager e passwordEncoder.
Vamos testar nossa API?

Está com tudo implementado? Chegou a hora de testar nossa API.

Basta executar nossa classe principal, a TrybePlaylist. Mas e o banco?

O banco para esta aplicação é o H2, um banco em memória, com suas definições especificadas no arquivo application.properties dentro do diretório resources.

O Spring automaticamente criará nossas tabelas e colocará nossa aplicação no ar através do container de aplicação Tomcat.

De posse de um cliente Rest API (Postman, Insomnia, entre outros) você poderá realizar requisições ao http://localhost:8080/aqui-voce-especifica-a-rota.

Você também pode ver quais as rotas disponíveis em nossa API através deste link - É importante que a API esteja rodando!
