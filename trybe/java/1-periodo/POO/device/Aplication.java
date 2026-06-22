public class Application {

  public static void main(String[] args) {
    Laptop laptop = new Laptop("Samsung", 100, 14);
    
    if (genericDevice instanceof Laptop) {
      Laptop specificLaptop = (Laptop) genericDevice; // downcasting seguro
    }
    
    PowerBank powerBank = new PowerBank();

    plugDevice(laptop);
    plugDevice(powerBank);
  }

  public static void plugDevice(Chargeable chargeable) {
    System.out.println("A bateria atual é " + chargeable.getBatteryLevel());
    chargeable.charge();
  }
}
