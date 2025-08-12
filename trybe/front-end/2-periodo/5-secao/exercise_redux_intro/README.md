# Boas vindas ao exercício introdutório do Redux

---

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).
  
- **OBS:** Ao realizar o fork, o GitHub, por padrão, copia apenas a branch main. Para realizar o fork copiando as demais branches, é necessário desmarcar a opção _copy the `main` branch only_.

![Main branch](images/fork.png)

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

- Para cada exercício, siga as instruções descritas na seção "Exercícios".

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<br />

# Exercícios

⚠️ **Atenção:** Antes realizar o exercício, é importante que você instale as dependências do projeto com o comando `npm install`.

**1** - Crie uma store para sua aplicação.

**2** - Crie um reducer implementando um `switch` que retorne apenas o estado inicial como `default`.

> ⚠️ Não se esqueça de colocar o reducer como parâmetro para o `createStore`, feito na etapa anterior.

**3** - Incremente o `switch` criado no passo anterior com os `cases` `NEXT_COLOR` e `PREVIOUS_COLOR`. Essas actions devem alterar o valor `index` guardado no `state` do redux.

> ⚠️ Atente aos limites de tamanho do array: as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

**4** - Implemente os `eventListeners` do arquivo `main.ts`, que escutam os cliques de cada botão, o **Previous color** e o **Next color**, e realizam um `dispatch` com as respectivas `actions`.

**5** - Faça o `subscribe` da store alterando o `innerHTML` da tag com id `value` para a cor atual e o style do elemento com id `container`. Você deverá ser capaz de ver as cores mudando ao fundo e o nome da cor exibida.

**6** - Crie um botão com o texto **Random color**, um `eventListener` e uma `action` no `reducer` adicionando uma cor aleatória ao array `colors` guardado no estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado `index` para a posição dela.

> ⚠️ Para facilitar, utilize a função `getRandomColor` que se encontra no arquivo `utils.ts`.

As cores criadas randomicamente devem ser armazenadas no array. Desse modo, com os botões de **Next color** e **Previous color**, será possível trafegar entre as cores padrões e as randômicas. Utilize o `spread operator` para adicionar cada cor randômica.
