// ./interfaces.ts
export interface ICepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(address: string, number: number): Promise<string>;
}

export interface ICar {
  drive(): void
}

export interface IAirPlane {
  fly(): void
}

export interface IFuturisticCar extends ICar, IAirPlane { }

