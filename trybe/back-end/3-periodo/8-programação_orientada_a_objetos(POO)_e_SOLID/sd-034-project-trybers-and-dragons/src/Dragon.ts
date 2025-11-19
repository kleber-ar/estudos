import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    (this as any)._lifePoints = 999;
  }
}
