const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão.

const dragonAttack = (dragon) => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random()* dragon.strength);
    const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;

    return dragonDmg;
};

// Crie uma função que retorne o dano do warrior.

const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() * (minDmg * warrior.weaponDmg));
    const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;

    return warriorDmg;
};

// Crie uma função que retorne o dano do mago.

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;

    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana...',
    };

    if (mageMana > 15) {
        const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
        turnStats.manaSpent = 15;
        turnStats.damageDealt = mageDamage;
        return turnStats;
    }
    return turnStats;
};

/* Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo, e cada ação é por definição uma HOF, pois, nesse caso, são funções que recebem como parâmetro outra função. */

const gameActions = {
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        dragon.healthPoints -= warriorDamage;
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;

    },
    mageTurn: (mageAttack) => {
        const mageTurnStats = mageAttack(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.damage = mageDamage;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= mageDamage;

    },
    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;

    },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);

console.log(gameActions.turnResults());