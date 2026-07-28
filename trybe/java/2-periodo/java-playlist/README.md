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

De posse de um cliente Rest API (Postman, Insomnia, entre outros) você poderá realizar requisições ao <http://localhost:8080/aqui-voce-especifica-a-rota>.

Você também pode ver quais as rotas disponíveis em nossa API através deste link - É importante que a API esteja rodando!

## Parte 2

# Jwt

Vamos praticar!

Hoje daremos continuidade ao nosso exercício do dia anterior. Agora, você deverá adicionar a nossa API de Gerenciamento de Músicas e Playlists a camada de autenticação utilizando o token JWT. Chegou a hora de colocar os conhecimentos recém adquiridos em prática! Bora lá?!
Exercício 1 - Conclua a implementação da TokenService

Implemente em: src/main/java/com/betrybe/playlist/service/TokenService.java

Ainda nos falta os métodos de generateToken() e validateToken().
Exercício 2 - Implemente a JwtFilter

Implemente em: src/main/java/com/betrybe/playlist/security/JwtFilter.java

A JwtFilter deverá estender de OncePerRequestFilter para evitar um stack overflow em nossa aplicação. Essa extensão nos permitirá implementar o método doFilterInternal responsável por repassar o nosso token e o seu respectivo usuário para o nosso mecanismo de autenticação. Além disso, é importante que você implemente o método extractToken que irá retornar uma String com o nosso token JWT.

    É importante mencionar que a nossa TokenService já está implementada e deverá ser utilizada aqui em conjunto com a PersonService que você modificou anteriormente. PS.: Não esqueça das anotações.

Exercício 3 - Ajuste a implementação de AuthenticationController

Ajuste em: src/main/java/com/betrybe/playlist/controller/AuthenticationController.java

Implemente corretamente a injeção de dependência do TokenService e garanta a geração de um novo token ao realizar o login.
Exercício 4 - Conclua a implementação da SecurityConfig

Implemente em: src/main/java/com/betrybe/playlist/security/SecurityConfig.java

A SecurityConfig está quase toda implementada. No entanto, é necessário finalizar a implementação do método securityFilterChain. Adicione proteção às rotas de autenticação e autorização e o filtro jwtFilter para validar tokens JWT.
Vamos testar nossa API?

Está com tudo implementado? Chegou a hora de testar nossa API.

Basta executar nossa classe principal, a TrybePlaylist.

Você pode visualizar as rotas disponíveis em nossa API através deste link - É importante que a API esteja rodando! Além disso, descomente as linhas do método customise no arquivo src/main/java/com/betrybe/playlist/security/DocAuthCustomizer.java. Em seguida, registre uma nova pessoa através do endpoint /auth/register e depois realize o login em /auth/login. Como saída você receberá um token JWT. Na posse do token, vá para a parte superior da página que contém um botão verde “Authorize”, clique nesse botão e uma pop-up abrirá para que você possa inserir o token gerado e efetuar o login.
