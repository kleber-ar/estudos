const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(info).toHaveProperty('personagem');

  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it ('Testa a informação de boas vindas.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(printMessage(info)).toMatch('Boas vindas');

  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(printMessage(info)).toMatch(info.personagem);

  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it ('Testa o fluxo de exceção da função printMessage.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => printMessage()).toThrow();
    
  });
});
