# Exercício 1

Esse projeto possui a implementação do Redux (store, action e reducer) em uma aplicação React. Ele consiste em um semáforo com três botões que, ao serem clicados, deverão renderizar a imagem correspondente da sua cor. Se apertar no botão `red`, a imagem com a luz **vermelha** deverá ser renderizada. O mesmo para as cores **amarela** e **verde**.

Após instalar as dependências e executar a aplicação com o comando `npm run dev`, você irá se deparar com três botões (_red_, _yellow_ e _green_). A princípio, ao serem clicados, nada acontecerá.

Seu objetivo nesse exercício será implementar o componente `TrafficSignal.tsx`, manipulando o estado global com o _Redux_. Você deverá:

- Implementar o componente TrafficSignal:
  - Corrija a chamada da função `signalColor` dentro do componente, a qual deve receber o valor da chave `color` que está armazenada no estado global.
  - Implementar a função `onClick` dos três botões:
    - Você deverá realizar o `dispatch()` da _action_ `changeSignal()`;
    - A _action_ deverá receber como parâmetro a respectiva cor do botão, em inglês: `changeSignal('red')` para o vermelho, `changeSignal('yellow')` para amarelo e `changeSignal('green')` para verde.

O estado global inicial da aplicação é o seguinte:

```js
state = {
  color: 'red',
}
```
