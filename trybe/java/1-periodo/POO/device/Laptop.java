package com.betrybe.tech;

public class Laptop extends ComputerDevice implements Chargeable{
  private double size;  // tamanho (14", 15", etc)

  public Laptop(String brand, double storageCapacity, double size) {
    super(brand, storageCapacity);

    this.size = size;
  }

  @Override
  public void bootUp() {
    System.out.println("Inicializando o laptop de tamanho " + size + "...");
  }

  @Override
    public void charge() {
        System.out.println("Carregando o laptop...");
    }

  @Override
    public int getBatteryLevel() {
        // Lógica para obter o nível da bateria do laptop
        return 85;
    }

}
