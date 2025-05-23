const productDetails = require("../src/productDetails");
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    const result = productDetails("produtoA", "produtoB");
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
    // Teste se o retorno da função é um array.
    expect(Array.isArray(result)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(result.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof result[0]).toBe("object");
    expect(typeof result[1]).toBe("object");
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(result[0]).not.toEqual(result[1]);
    // Teste se os dois productIds terminam com 123.
    expect(result[0].details.productId.endsWith("123")).toBe(true);
    expect(result[1].details.productId.endsWith("123")).toBe(true);
  });
});
