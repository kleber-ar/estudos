import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1); // player1 é o usado no parâmetro do Battle
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this.player.attack(this._player2);
      if (this._player2.lifePoints === -1) break;

      this._player2.attack(this.player);
    }

    return super.fight();
  }
}
