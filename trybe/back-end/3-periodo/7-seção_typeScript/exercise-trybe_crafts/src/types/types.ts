export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number
  brands: string[]
};

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string
};

export type Order = {
  id: number,
  customerName: string,
  customerEmail: string,
  items: Item[],
  status: 'pendente' | 'enviado' | 'entregue'
};
