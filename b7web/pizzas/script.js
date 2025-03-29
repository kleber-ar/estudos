const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
let qtd = 1;
let cart = [];
let selectedPizza = null;
let basePrice = 0;

pizzaJson.map((item) => {
  let pizza = c('.pizza-item').cloneNode(true);

  pizza.querySelector(".pizza-item--img img").src = item.img;
  pizza.querySelector(".pizza-item--price").innerText = `R$ ${item.price[2].toFixed(2).replace('.', ',')}`;
  pizza.querySelector(".pizza-item--name").innerText = item.name;
  pizza.querySelector(".pizza-item--desc").innerText = item.description;

  c('.pizza-area').append(pizza);

  pizza.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    selectedPizza = item;
    basePrice = item.price[2];

    c('.pizzaWindowArea').style.display = 'block';
    c('.pizzaBig img').src = item.img;
    c('.pizzaInfo h1').innerText = item.name;
    c('.pizzaInfo--desc').innerText = item.description;

    cs('.pizzaInfo--size').forEach((size, index) => {
      size.querySelector('span').innerText = item.sizes[index];

      size.addEventListener('click', () => {
        cs('.pizzaInfo--size').forEach((el) => el.classList.remove('selected'));
        size.classList.add('selected');
        basePrice = item.price[index];
        atualizarPreco();
      });

      c('.pizzaInfo--actualPrice').innerText = `R$ ${basePrice.toFixed(2).replace('.', ',')}`;
    });

  });

});

c('.pizzaInfo--qt').innerText = qtd;

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
  if (qtd > 1) {
    qtd--;
    c('.pizzaInfo--qt').innerText = qtd;
    atualizarPreco();
  }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
  qtd++;
  c('.pizzaInfo--qt').innerText = qtd;
  atualizarPreco()
});

c('.pizzaInfo--addButton').addEventListener('click', () => {

  const itemExists = cart.some(item => item.id === selectedPizza.id && item.size === c('.pizzaInfo--size.selected').innerText);

  if (itemExists) {
    const itemIndex = cart.findIndex(item => item.id === selectedPizza.id && item.size === c('.pizzaInfo--size.selected').innerText);
    cart[itemIndex].qtd = qtd;
    cart[itemIndex].price = parseFloat(c('.pizzaInfo--actualPrice').innerText.replace('R$ ', ''));
  } else {
    cart.push({
      id: selectedPizza.id,
      name: selectedPizza.name,
      size: c('.pizzaInfo--size.selected').innerText,
      img: selectedPizza.img,
      basePrice,
      price: parseFloat(c('.pizzaInfo--actualPrice').innerText.replace('R$ ', '')),
      qtd,
    });
  }

  finalValues()
  atualizarCarrinho()
  c('.pizzaWindowArea').style.display = 'none';
  c('aside').classList.add('show');
  c('.menu-openner').style.cursor = 'pointer';

  clear()
});

c('.pizzaInfo--cancelButton').addEventListener('click', clear);
c('.pizzaInfo--cancelMobileButton').addEventListener('click', clear);
c('.menu-closer').addEventListener('click', () => {
  c('aside').classList.remove('show');
});

function clear() {
  c('.pizzaWindowArea').style.display = 'none';
  cs('.pizzaInfo--size').forEach((el) => el.classList.remove('selected'));
  c('.pizzaInfo--sizes').lastElementChild.classList.add('selected');
  c('.pizzaInfo--qt').innerText = 1;
  qtd = 1;
}

function atualizarCarrinho() {
  c('.cart').innerHTML = '';

  cart.forEach((item) => {
    let cartItem = c('.cart--item').cloneNode(true);

    cartItem.querySelector('img').src = item.img;
    cartItem.querySelector('.cart--item-nome').innerText = `${item.name} - (${item.size[0]}) R$ ${item.price.toFixed(2).replace('.', ',')}`;
    cartItem.querySelector(".cart--item--qt").innerText = item.qtd;

    cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
      item.qtd++
      let calc = item.basePrice * item.qtd;
      item.price = calc;
      finalValues()
      atualizarCarrinho()
    });
    cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
      if (item.qtd > 1) {
        item.qtd--
        let calc = item.basePrice * item.qtd;
        item.price = calc;
      } else {
        cart = cart.filter(p => !(p.id === item.id && p.size === item.size));
      }

      if (cart.length === 0) {
        c('aside').classList.remove('show');
      }
      finalValues()
      atualizarCarrinho()

    });

    c('.cart').append(cartItem);
  });
}

function atualizarPreco() {
  let newPrice = basePrice * qtd;
  c('.pizzaInfo--actualPrice').innerText = `R$ ${newPrice.toFixed(2).replace('.', ',')}`;
}

function finalValues() {

  let sub = cart.reduce((acc, { price }) => acc + price, 0);
  c('.cart--totalitem.subtotal').lastElementChild.innerText = `R$ ${sub.toFixed(2).replace('.', ',')}`;

  let desc = sub * 0.1;
  c('.cart--totalitem.desconto').lastElementChild.innerText = `R$ ${desc.toFixed(2).replace('.', ',')}`;

  let total = sub - desc;
  c('.cart--totalitem.total.big').lastElementChild.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;

  let itens = cart.reduce((acc, { qtd }) => acc + qtd, 0);
  c('.menu-openner span').innerText = itens;
}

c('.menu-openner').addEventListener('click', () => {
  if (cart.length > 0) {
    c('aside').classList.add('show');
  }
});

