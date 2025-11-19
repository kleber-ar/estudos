import Race from './Race';

class Elf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
