import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req10Test {
    @Test
    @DisplayName("10 - Implemente cada função para calcular os múltiplos de 2, múltiplos de 3 e os múltiplos de 2 e 3 de um array de 15 números inteiros")
    fun testFindMultiples() {
        val numbers = intArrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        val expectedMultiplesOf2 = intArrayOf(2, 4, 6, 8, 10, 12, 14)
        val expectedMultiplesOf3 = intArrayOf(3, 6, 9, 12, 15)
        val expectedMultiplesOf2And3 = intArrayOf(6, 12)

        val multiplesOf2 = findMultiplesOf2(numbers)
        assertEquals(expectedMultiplesOf2.toList(), multiplesOf2, "Calcular os multiplos de 2")

        val multiplesOf3 = findMultiplesOf3(numbers)
        assertEquals(expectedMultiplesOf3.toList(), multiplesOf3, "Calcular os multiplos de 3")

        val multiplesOf2And3 = findMultiplesOf2And3(numbers)
        assertEquals(expectedMultiplesOf2And3.toList(), multiplesOf2And3, "Calcular os multiplos de 2 e 3")
    }
}