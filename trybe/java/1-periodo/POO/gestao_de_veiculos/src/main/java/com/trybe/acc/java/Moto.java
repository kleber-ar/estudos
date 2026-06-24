public class Moto extends VeiculoBase {

  private String tipoMoto;

  public Moto(String marca, String modelo, int ano, String tipoCombustivel, int capacidadeTanque,
      String tipoMoto) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.tipoMoto = tipoMoto;
  }

  public double calcularConsumoCombustivel(double distancia) {
    double taxaConsumo = 18.0; // Taxa de consumo em km por litro para uma moto
    double consumoCombustivel = distancia / taxaConsumo;
    return consumoCombustivel;
  }

  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Tipo da moto: " + getTipoMoto());
  }

  public String getTipoMoto() {
    return tipoMoto;
  }

  public void setTipoMoto(String tipoMoto) {
    this.tipoMoto = tipoMoto;
  }

}
