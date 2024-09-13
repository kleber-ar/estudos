class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this.life;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class LittleMonster extends Character {
  constructor() {
    super("Little Monster");
    this.life = 40;
    this.attack = 5;
    this.defense = 5;
    this.maxLife = this.life;
  }
}

class BigMonster extends Character {
  constructor() {
    super("Big Monster");
    this.life = 120;
    this.attack = 15;
    this.defense = 5;
    this.maxLife = this.life;
  }
}

class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;
  }

  start() {
    this.update();

    this.fighter1El
      .querySelector(".attack")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2),
      );

    this.fighter2El
      .querySelector(".attack")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1),
      );
  }

  update() {
    this.fighter1El.querySelector(".name").innerText =
      `${this.fighter1.name} - ${this.fighter1.life} HP`;
    let f1LifePct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".bar").style.width = `${f1LifePct}%`;

    this.fighter2El.querySelector(".name").innerText =
      `${this.fighter2.name} - ${this.fighter2.life} HP`;
    let f2LifePct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".bar").style.width = `${f2LifePct}%`;
  }

  doAttack(attacking, attacked) {
    if (attacking.life <= 0 || attacked.life <= 0) {
      this.log.addMessage("Ta morto já!");
    } else {

      let attackFactor = (Math.random() * 2).toFixed(2);
      let defenseFactor = (Math.random() * 2).toFixed(2);

      let actualAttack = attacking.attack * attackFactor;
      let actualDefense = attacked.defense * defenseFactor;

      if (actualAttack > actualDefense) {
        attacked.life -= Math.round(actualAttack);

        this.log.addMessage(`Causou ${Math.round(actualAttack)} de dano!`)
      } else {
        this.log.addMessage(`${attacked.name} defendeu!`)
      }
    }

    this.update();
  }
}

class Log {
  list = [];

  constructor(listEl) {
    this.listEl = listEl;
  }

  render() {
    this.listEl.innerHTML = '';

    for (let index in this.list) {
      this.listEl.innerHTML += `<li>${this.list[index]}</li>`
    }
  }

  addMessage(msg) {
    this.list.unshift(msg);
    this.render();
  }

}
