package com.betrybe.tech;

public abstract class ComputerDevice {
  public static final double MAX_STORAGE_CAPACITY = 2048.0;  // Em GB
  private final String brand;  // A marca não pode ser alterada
  double storageCapacity;

  public ComputerDevice(String brand, double storageCapacity) {
    this.brand = brand;
    this.storageCapacity = storageCapacity;
  }

  public String getBrand() {
    return brand;
  }

  public double getStorageCapacity() {
    return storageCapacity;
  }

  // Método abstrato, sem implementação
  public abstract void bootUp();

  public final void shutDown() {
    System.out.println("Desligando o dispositivo...");
  }
}
