class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3 ) {
      throw new Error('O nome deve conter mais que 3 caracteres');
    }

    this._name = value
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
    }

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length < 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalho.')
    }

    this._assignmentsGrades = value;
  }

  sumNotes(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((prevNotes, note) => { const totalNote = prevNotes + note; return totalNote }, 0)
  }

  averageNotes(): number {
    const sumNotes = this.sumNotes();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumNotes / divider)
  }
};

const person1 = new Student('01052022', 'João da Silva')

person1.examsGrades = [25, 20, 23, 23];
person1.assignmentsGrades = [45,45];

console.log(person1);
console.log(`Soma das notas: ${person1.sumNotes()}`);
console.log(`Média das notas: ${person1.averageNotes()}`);


const person2 = new Student('01052022', 'Maria da Silva')

console.log(person2);
