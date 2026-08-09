import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req01Test {
    @Test
    @DisplayName("1 - Implemente a função para calcular o preço de um produto com desconto de 10%")
    fun testCalculateDiscount() {

        val originalPrice = 100.0
        val expectedPrice = 90.0

        val newPrice = calculateDiscount(originalPrice)

        assertEquals(expectedPrice, newPrice, 0.001)
    }
}
