const {removeItem, myFizzBuzz, encode, decode, techList, hydrate} = require('./exercicio');

describe('Exercicio-1: testa a função removeItem', () => {
  it('retorna array removendo o item correto', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    
  });
});

describe('Exercicio-2: testa a função fizzBuzz', () => {
  it('retorna valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz("a")).toBeFalsy();

  });
});

describe ('Exercicio-3: Testa as funçoes encode e decode', () => {
  it('teste se encode e decode são funçoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('teste se encode converte vogais: a,e,i,o,u para 1,2,3,4,5', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  });
  it('teste se decode converte numeros para vogais', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });
  it('teste se retorna a quatidade de caracteres do parametro', () => {
    expect(encode('ana').length).toEqual(3);
  });

});

describe('Exercicio-4:Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Exercicio-5: Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});