public class PowerBank implements Chargeable {
    @Override
    public void charge() {
        System.out.println("Carregando o powerbank...");
    }

    @Override
    public int getBatteryLevel() {
        // Lógica para obter o nível da bateria do powerbank
        return 65;
    }
}
