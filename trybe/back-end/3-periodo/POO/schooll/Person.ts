export default class Person {

  constructor(private _name: string, private _birthDate: Date){

    this.validadePerson();
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date){
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const oneYearInMS = 31_536_000_000;

    return Math.floor(diff / oneYearInMS);
  }

  private validateName(name: string): void {
    if(name.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('Nãa da pra ter nascido no futuro.')
    }
    if (Person.getAge(date) > 120 ) {
      throw new Error('Tem mais de 120 anos mesmo ?!')
    }
  }

  private validadePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }

}