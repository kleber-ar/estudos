package com.betrybe.rpg;

public class PlayableCharacter {
  private String name; // nome
  private String race; // raça (elfo, humano, orc)

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getRace() {
    return race;
  }

  public void setRace(String race) {
    this.race = race;
  }
}
