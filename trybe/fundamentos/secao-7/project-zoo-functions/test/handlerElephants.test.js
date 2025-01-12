const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna UNDEFINED se nenhum parâmetro for passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('MESSAGE ERROR caso não receba string', () => {
    const ErrorMessage = 'Parâmetro inválido, é necessário uma string';

    expect(handlerElephants(123)).toBe(ErrorMessage);
    expect(handlerElephants({})).toBe(ErrorMessage);
    expect(handlerElephants([])).toBe(ErrorMessage);
    expect(handlerElephants(true)).toBe(ErrorMessage);
  });

  it('Retorna NULL caso não exista', () => {
    expect(handlerElephants('none_exist')).toBeNull();
  });

  it('Retorna a quantidade de especies caso receba COUNT', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Retorna os nomes caso receba NAMES', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });

  it('Retorna a média de idade dos Elephants', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Retorna o valor da chave passada', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
});
