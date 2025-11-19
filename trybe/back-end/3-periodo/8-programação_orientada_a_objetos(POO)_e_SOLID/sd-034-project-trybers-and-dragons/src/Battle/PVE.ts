import Battle from './Battle';
import Fighter from '../Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  private isPlayerAlive(): boolean {
    return this.player.lifePoints !== -1;
  }

  private static isMonsterAlive(monster: SimpleFighter): boolean {
    return monster.lifePoints !== -1;
  }

  private attackMonster(monster: SimpleFighter): void {
    this.player.attack(monster as Fighter);
  }

  private attackPlayer(monster: SimpleFighter): void {
    monster.attack(this.player as SimpleFighter);
  }

  private executeRound(): void {
    this._monsters.forEach((monster) => {
      if (!this.isPlayerAlive() || !PVE.isMonsterAlive(monster)) return;

      this.attackMonster(monster);

      if (PVE.isMonsterAlive(monster)) {
        this.attackPlayer(monster);
      }
    });
  }

  fight(): number {
    while (
      this.isPlayerAlive()
      && this._monsters.some((m) => PVE.isMonsterAlive(m))
    ) {
      this.executeRound();
    }

    return super.fight();
  }
}
