package com.trybe.acc.java;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class VeiculoTest {
  @Test
  @DisplayName("1 - Calcular o consumo de combustível do Carro")
  void testCalcularConsumoCombustivelCarro() {
    Carro carro = new Carro("Ford", "Fiesta", 2021, "Gasolina", 40, 5);
    double consumo = carro.calcularConsumoCombustivel(100);
    assertEquals(10, consumo, 0.001);
  }

  @Test
  @DisplayName("2 - Calcular o consumo de combustível do Caminhão")
  void testCalcularConsumoCombustivelCaminhao() {
    Caminhao caminhao = new Caminhao("Mercedes", "Actros", 2021, "Diesel", 300, 20000);
    double consumo = caminhao.calcularConsumoCombustivel(100);
    assertEquals(16.666, consumo, 0.001);
  }

  @Test
  @DisplayName("3 - Calcular o consumo de combustível da Moto")
  void testCalcularConsumoCombustivelMoto() {
    Moto moto = new Moto("Honda", "CBR500R", 2021, "Gasolina", 17, "Esportiva");
    double consumo = moto.calcularConsumoCombustivel(100);
    assertEquals(5.555, consumo, 0.001);
  }

}

