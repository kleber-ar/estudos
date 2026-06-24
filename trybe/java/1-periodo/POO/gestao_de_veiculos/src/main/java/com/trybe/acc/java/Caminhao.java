public class Caminhao extends VeiculoBase {

  private double capacidadeCarga;

  public Caminhao(String marca, String modelo, int ano, String tipoCombustivel,
      int capacidadeTanque, double capacidadeCarga) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.capacidadeCarga = capacidadeCarga;
  }

  public double calcularConsumoCombustivel(double distancia) {
    double taxaConsumo = 6.0; // Taxa de consumo em km por litro para um caminhão
    double consumoCombustivel = distancia / taxaConsumo;
    return consumoCombustivel;
  }

  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Capacidade de carga: " + getCapacidadeCarga() + " kg");
  }

  public double getCapacidadeCarga() {
    return capacidadeCarga;
  }

  public void setCapacidadeCarga(double capacidadeCarga) {
    this.capacidadeCarga = capacidadeCarga;
  }

}
