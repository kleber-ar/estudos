package com.betrybe.rpg;

public class Main {

  public static void main(String[] args) {
    Warrior warrior = new Warrior();
    warrior.setName("Aragorn");
    warrior.setRace("Humano"); 
    warrior.setWeapon("Espada"); 

    System.out.println(warrior.getName() + " é da raça " + warrior.getRace() + " e utiliza " + warrior.getWeapon());
  }
}
