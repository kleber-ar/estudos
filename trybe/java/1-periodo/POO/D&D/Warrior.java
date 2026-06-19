package com.betrybe.rpg;

public class Warrior extends PlayableCharacter {
  private String weapon; // arma

  public String getWeapon() {
    return weapon;
  }

  public void setWeapon(String weapon) {
    this.weapon = weapon;
  }
//Override serA sobrescrita de método (override) é a capacidade de uma subclasse oferecer sua própria implementação para um método já definido em sua superclasse. Isso permite à subclasse modificar ou expandir um comportamento específico herdado, mantendo a mesma assinatura do método original. 
  @Override
  public void attack() {
    System.out.println("O guerreiro ataca com sua arma.");
  }

  public void specialAttack() {
    if (!isAlive) {
      System.out.println("Personagem morreu e não pode usar seu ataque especial.");
      return;
    }

    System.out.println(this.getName() + " está usando seu ataque especial!");
  }

}
