import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req09Test {
    @Test
    @DisplayName("9 - Implemente a função para calcular o valor de um carro à vista e a prazo")
    fun testCalculateFinalPriceCash() {
        val carValue = 25000.0
        val surcharges = arrayOf(0.06, 0.12, 0.18, 0.24, 0.30)

        val finalPriceInstallment1 = calculateFinalPrice(carValue, 1, surcharges)
        assertEquals(20000.0, finalPriceInstallment1, 0.001)

        val finalPriceInstallment12 = calculateFinalPrice(carValue, 12, surcharges)
        assertEquals(26500.0, finalPriceInstallment12, 0.001, "Calcular o valor do carro divido em 12 parcelas")

        val finalPriceInstallment24 = calculateFinalPrice(carValue, 24, surcharges)
        assertEquals(28000.0, finalPriceInstallment24, 0.001, "Calcular o valor do carro divido em 24 parcelas")

        val finalPriceInstallment36 = calculateFinalPrice(carValue, 36, surcharges)
        assertEquals(29500.0, finalPriceInstallment36, 0.001, "Calcular o valor do carro divido em 36 parcelas")

        val finalPriceInstallment48 = calculateFinalPrice(carValue, 48, surcharges)
        assertEquals(31000.0, finalPriceInstallment48, 0.001, "Calcular o valor do carro divido em 48 parcelas")

        val finalPriceInstallment60 = calculateFinalPrice(carValue, 60, surcharges)
        assertEquals(32500.0, finalPriceInstallment60, 0.001, "Calcular o valor do carro divido em 60 parcelas")
    }
}