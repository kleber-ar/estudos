abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Me chamo ${this._name}, na mão tu não se garante`);
    
  }

  specialMove(): void {
    console.log(`${this._name} usou ${this._specialMoveName}`);
    
  }
}

class LongRangeCharacter extends Character  {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Me chamo ${this._name}, te furo todo rapá`);
    
  }

  specialMove(): void {
    console.log(`${this._name} usou ${this._specialMoveName}`);
    
  }
}

const popo = new MeleeCharacter('popo', 'SOCÃO')
const jorgin = new LongRangeCharacter('Jorgin', '38ão')

// popo.talk();
// popo.specialMove();

// jorgin.talk();
// jorgin.specialMove();

Character.characterPresentation(popo);
Character.characterPresentation(jorgin);