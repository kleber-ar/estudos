# Exercício 2

Ao executar essa aplicação, você irá se deparar com três carros com as cores _Red_, _Blue_ e _Yellow_. Cada um deles apresenta um botão que, ao ser clicado, deve alterar o valor do estado global. O estado inicial da aplicação é o seguinte:

```js
state = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
}
```

Quando o valor de `redCar` for `true`, o carro vermelho deverá se mover para a direita. Quando for falso, ele deve mover-se para a esquerda. O mesmo deve ocorrer para os três carros.

Toda a aplicação já está pronta e com o _Redux_ configurado. Seu desafio será implementar o componente `Cars`, no arquivo `src/Cars.tsx`:

- Conecte o componente ao Redux de forma que ele tenha acesso aos valores de `red`, `blue` e `yellow` que já estão sendo utilizados no componente. Estes valores devem ser preenchidos de acordo com sua respectiva cor a partir do valor no estado global (como exemplo, `red` deve possuir o valor da chave `redCar`, armazenado no estado global).
- Implemente a função `onClick()` dos botões de modo que, quando clicados, a aplicação realize o `dispatch` da _action_ `moveCar`. Quando clicar no botão correspondente ao carro **vermelho**, caso o estado global `redCar` possuir o valor `true`, ele deverá ser alterado para `false`, e vice-versa.
