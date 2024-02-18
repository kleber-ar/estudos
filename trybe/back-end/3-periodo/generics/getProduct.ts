type Product = {
  barcode: string,
  price: number
};

function getProduct(): Product {
  const product = {
    barcode: '123c456b789a',
    price: 5.5,
  };
  return product;
}

console.log(getProduct());