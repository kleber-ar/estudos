import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req05Test {
    @Test
    @DisplayName("5 - Implemente a função para calcular o custo final de um carro")
    fun testCalculateConsumerPrice() {
        val resultUp12000 = calculateConsumerPrice(10000.0)
        assertEquals(10500.0, resultUp12000, 0.01, "Calcular com o custo de fábrica atá 12000")

        val resultUp25000 = calculateConsumerPrice(15000.0)
        assertEquals(18750.0, resultUp25000, 0.01, "Calcular com o custo de fábrica entre 12001 e 25000")

        val resultMore25000 = calculateConsumerPrice(30000.0)
        assertEquals(40500.0, resultMore25000, 0.01, "Calcular com o custo de fábrica acima de 25000")
    }

}