public class Carro extends VeiculoBase {

  private int numPassageiros;

  public Carro(String marca, String modelo, int ano, String tipoCombustivel, int capacidadeTanque,
      int numPassageiros) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.numPassageiros = numPassageiros;
  }

  public double calcularConsumoCombustivel(double distancia) {
    double taxaConsumo = 10.0; // Taxa de consumo em km por litro para um carro
    double consumoCombustivel = distancia / taxaConsumo;
    return consumoCombustivel;
  }

  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Número de passageiros: " + getNumPassageiros());
  }

  public int getNumPassageiros() {
    return numPassageiros;
  }

  public void setNumPassageiros(int numPassageiros) {
    this.numPassageiros = numPassageiros;
  }
}
