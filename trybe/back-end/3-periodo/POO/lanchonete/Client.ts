export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter 3 ou mais caracteres.')
    }
    this._name = value;
  }
}