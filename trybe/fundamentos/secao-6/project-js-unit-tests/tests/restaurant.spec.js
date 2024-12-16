const createMenu = require("../src/restaurant");

describe("10 - Implemente os casos de teste da função `createMenu`", () => {
  it("Verifica se createMenu retorna um objeto que possui a chave fetchMenu", () => {
    const menu = createMenu({ food: {}, drinks: {} });
    expect(menu).toHaveProperty("fetchMenu");
  });

  it("Verifica se o valor de fetchMenu é uma função", () => {
    const menu = createMenu({ food: {}, drinks: {} });
    expect(typeof menu.fetchMenu).toBe("function");
  });

  it("Verifica se fetchMenu retorna um objeto com as chaves food e drinks", () => {
    const menuData = { food: {}, drinks: {} };
    const menu = createMenu(menuData);
    expect(menu.fetchMenu()).toEqual(menuData);
  });

  it("Verifica se o menu passado para createMenu é igual ao retornado por fetchMenu", () => {
    const menuData = { food: { coxinha: 3.9 }, drinks: { agua: 3.0 } };
    const menu = createMenu(menuData);
    expect(menu.fetchMenu()).toEqual(menuData);
  });

  it("Verifica se a chave consumption começa como um array vazio", () => {
    const menu = createMenu({ food: {}, drinks: {} });
    expect(menu.consumption).toEqual([]);
  });

  it("Verifica se pedidos são adicionados corretamente", () => {
    const menu = createMenu({
      food: { coxinha: 3.9 },
      drinks: { agua: 3.0 },
    });

    menu.order("coxinha");
    expect(menu.consumption).toEqual(["coxinha"]);
    expect(menu.order("picanha")).toBe("Item indisponível");
    expect(menu.consumption).toEqual(["coxinha"]);
  });

  it("Verifica se a função pay retorna a soma correta dos itens acrescida de 10%", () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.0, cerveja: 6.9 },
    });

    menu.order("coxinha");
    menu.order("cerveja");
    menu.order("coxinha");

    expect(menu.pay()).toBeCloseTo(16.17); // Soma: 3.9 + 6.9 + 3.9 = 14.7; Total c/ 10%: 16.17
  });
});
