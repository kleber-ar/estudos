# Boas vindas ao exercício Formulário com Redux

## Que tal criar formulários utilizando `Redux`? 🚀

---

## Orientações

<details>
  <summary>
    <strong>🤷🏽‍♀️ Como entregar</strong>
  </summary><br>

  Para entregar seu projeto, você deverá criar um *Pull Request* neste repositório.

  > Lembre-se de que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary> <br />

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

[FORMULÁRIO DE AVALIAÇÃO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH34&template=betrybe/sd-0x-exercise-forms-redux-ts)

</details>

---

## Começando o exercício

É muito comum, na web, formulários com várias "etapas", que também são chamadas de *multi-step forms*. Neste exercício, será necessário implementar o Redux para dois formulários encadeados:

- um para dados pessoais.
- outro para dados profissionais.

Após o preenchimento dos dois formulários, as informações serão renderizadas na tela.

Os formulários já estão criados, então não é necessário criar novos arquivos, além dos propostos para a execução do exercício.

![forms-redux](form-redux.gif)

Para começar, é preciso salvar as informações de cada formulário no gerenciador de estados. Depois, em outra página, é necessário acessar esses dados para que eles sejam renderizados.

Por isso, você precisará de um gerenciador de estados (Redux), para salvar essas informações na `store` e poder acessá-las.

Mãos ao código! 💪

## 01 – Implementando as rotas e a estrutura das páginas

Nesta aplicação, existirão quatro rotas: uma página *Home*, duas páginas de formulário e uma tela de resumo das informações. Veja, a seguir, um pouco mais de detalhes de cada uma das rotas que deverá ser configurada.

- `/` – Raiz; aqui deverá ser renderizado apenas o botão "Preencher Formulário". Essa página está criada no componente `pages/Home.tsx`.
- `personal-form` – O primeiro formulário deverá aparecer nessa rota. Essa página está criada no componente `pages/PersonalForm.tsx`.
- `professional-form` – O segundo formulário deverá aparecer nessa rota. Essa página está criada no componente `pages/ProfessionalForm.tsx`.
- `form-display` – Nessa rota, deverá aparecer o resumo de todas as informações preenchidas nos dois formulários anteriores. Essa página está criada no componente `pages/FormDisplay.tsx`.

Nesse requisito, você deverá criar a navegação entre essas páginas, isto é, quando cada um dos botões for clicado, a pessoa usuária deverá ser redirecionada para as rotas corretas. A navegação só deve ocorrer se todas os campos de cada formulário estiver preenchido.

As páginas deverão obedecer à seguinte ordem: `/` -> `personal-form` -> `professional-form` -> `form-display`.

## 02 – Implementando o Redux

Verifique a estrutura de pastas e arquivos necessários para a implementação do Redux. Vale notar que o redux e as dependências já estão instalados, inclusive o *Redux DevTools*.

<details>
  <summary>
    Estrutura de pastas e arquivos:
  </summary>

- A pasta `src/redux`, para agrupar todos os arquivos relacionados ao Redux.
- A pasta `src/redux/actions/`, para armazenar as `actions` do projeto.
- A pasta `src/redux/reducers`, para armazenar os `reducers` do projeto.
- O arquivo `src/redux/index.ts`, responsável por criar e exportar a `store` da aplicação.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

</details>

👀 **De olho nas dicas**:

- De início, você pode implementar o reducer apenas com o valor `default`.
- O `composeWithDevTools` pode ajudar a visualizar as etapas do ***Redux***.
- Lembre-se de que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.ts`.
- Caso tenha dificuldade para montar a estrutura do Redux, você pode consultar o **Checklist do Redux com React**, na seção 7 do dia 3.
- Faça as importações corretas para o bom funcionamento de sua aplicação.
- Se você quiser, poderá utilizar o `combineReducers`.
- O estado global inicial do Redux deverá ter a seguinte estrutura:

```javascript
{
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
}
```

## 03 – Salvando as informações

Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`. Todos os dados devem, no estado global, estar dentro das respectivas chaves: `personalData` e `professionalData`.

👀 **De olho na dica**:

- Lembre-se de que o hook `useSelector` lê as informações da `store` e o hook `useDispatch` retorna a função `dispatch`, que envia as informações para a `store`.

## 04 – Renderizando as informações

Renderize as informações que estão salvas na `store` no componente `FormDisplay`.

👀 **De olho na dica**:

- Os testes irão pedir que o formato de exibição no componente `FormDisplay` tenha a seguinte estrutura: `Nome: { nome }`.

---
