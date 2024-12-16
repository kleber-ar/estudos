/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => ({
  fetchMenu: () => menu,
  consumption: [],
  order(item) {
    const allItems = { ...menu.food, ...menu.drinks };
    if (!allItems[item]) {
      return "Item indisponível";
    }

    this.consumption.push(item);
  },
  pay() {
    const allItems = { ...menu.food, ...menu.drinks };
    const total = this.consumption.reduce((acc, cur) => acc + allItems[cur], 0);

    return total * 1.1;
  },
});

module.exports = createMenu;
