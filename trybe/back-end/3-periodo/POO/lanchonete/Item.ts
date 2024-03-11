export default class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no minimo 3 caracteres')
    }

    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0 ) throw new Error('bota um preço maior que 0');
    
    this._price = value
  }

}