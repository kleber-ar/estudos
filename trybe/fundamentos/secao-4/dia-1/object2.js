// 1 - Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
//     De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

// 2 - Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
//     Modifique o nome da pessoa compradora para Luiz Silva;
//     Modifique o valor total da compra para R$ 50,00.

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.

  const orderPerson = fullOrder.name;
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const phone = fullOrder.phoneNumber;
  const address = fullOrder.address.street;
  const number = fullOrder.address.number;
  const ap = fullOrder.address.apartment;

  return `Olá, ${deliveryPerson}, entrega para: ${orderPerson}, Telefone: ${phone}, ${address}, Número: ${number}, AP: ${ap}`;

  //  'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'
};

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.

  fullOrder.name = "Luiz Silva";
  fullOrder.payment.total = 50;

  const pizzas = Object.keys(fullOrder.order.pizza).join(", ");

  return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total}.`;

  // Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
};

console.log(orderModifier(order));
