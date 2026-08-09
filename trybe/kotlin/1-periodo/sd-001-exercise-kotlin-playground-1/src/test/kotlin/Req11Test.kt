import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req11Test {
    @Test
    @DisplayName("11 - Implemente cada função para calcular a soma dos positivos e a quantidade de números negativos de uma lista com dez números reais")
    fun testCountNegativeNumbersAndSumOfPositive() {
        val numbers = listOf(-1.0, 2.0, -3.0, 4.0, -5.0)

        val count = countNegativeNumbers(numbers)
        assertEquals(3, count, "Calcular a quantidade de números negativos")

        val sum = calculateSumOfPositiveNumbers(numbers)
        assertEquals(6.0, sum, 0.001, "Calcular a soma dos números positivos da lista")
    }
}