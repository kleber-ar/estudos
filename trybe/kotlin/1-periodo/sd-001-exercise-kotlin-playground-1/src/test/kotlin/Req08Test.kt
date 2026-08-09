import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req08Test {
    @Test
    @DisplayName("8 - Implemente cada função para calcular a soma dos números pares e dos números ímpares")
    fun testCalculateSumEvenAndSumOdd() {
        val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

        val sumEven = calculateSumEven(numbers)
        assertEquals(30, sumEven, "Calcular a soma dos numeros pares")

        val sumOdd = calculateSumOdd(numbers)
        assertEquals(25, sumOdd, "Calcular a soma dos numeros ímpares")
    }
}