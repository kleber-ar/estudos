import Client from "./Client";
import Item from "./Item";
import Order from "./Order";

const client = new Client('João');

const hamburguer = new Item('x-burguer', 5.00);
const refri = new Item('pepsi 300ml', 5.00);
const dessert = new Item('Açai', 3.00);

const order = new Order(client, [hamburguer, refri, dessert], 'dinheiro', 1.00);

console.log(order);
console.log(`Valor: ${order.priceTotal()}`);
console.log(`Desconto: ${order.discount}`);
console.log(`Total: ${order.totalWithDiscount()}`);
