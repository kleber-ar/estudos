import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';
import Battle from './Battle';

// Characters
const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

// levelUp várias vezes no player1
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

// PvP
const pvp = new PVP(player2, player3);
// NÃO chamar pvp.fight()

// PvE
const pve = new PVE(player1, [monster1, monster2]);
// NÃO chamar pve.fight()

// runBattles
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
