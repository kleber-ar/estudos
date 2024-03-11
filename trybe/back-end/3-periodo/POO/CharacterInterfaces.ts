interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character: Character): Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  async create(character: Character) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharaacter = { id: lastId + 1, ...character };
    db.push(newCharaacter);
    return newCharaacter;
  };

  async findIndexById(id: number) {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0 ) throw new Error('Character not found');
    return index;
  };

  async update(id: number, character: Character) {
    const indexToUpdate = await this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };

    return db[indexToUpdate];
  }

  async delete(id: number) {
    const indexToDelete = await this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }
  
  async getAll() { return db; };

    async getById(id: number) {
      const indexToGet = await this.findIndexById(id);
      return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: Character) {
    const newCharaacter = await this.model.create(character);
    return ({ status: 201, data: newCharaacter});
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter});
  }
}

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);