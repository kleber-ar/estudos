import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req04Test {
    @Test
    @DisplayName("4 - Implemente cada função para calcular a média, diferença, produto e divisão entre os dois números")
    fun testCalculateAverageAndDifferenceAndProductAndDivision() {
        val resultAverage = calculateAverage(10.0, 20.0)
        assertEquals(15.0, resultAverage, "Calcular a média entre os números digitados")

        val resultDifference1 = calculateDifference(20.0, 10.0)
        val resultDifference2 = calculateDifference(10.0, 20.0)
        assertEquals(10.0, resultDifference1, "Calcular a diferença do maior pelo menor")
        assertEquals(10.0, resultDifference2, "Calcular a diferença do maior pelo menor")

        val resultProduct = calculateProduct(5.0, 4.0)
        assertEquals(20.0, resultProduct, "Calcular o produto entre os números digitados")

        val resultDivision1 = calculateDivision(10.0, 2.0)
        val resultDivision2 = calculateDivision(10.0, 0.0)
        assertEquals(5.0, resultDivision1, "Calcular a divisão do primeiro pelo segundo")
        assertEquals(null, resultDivision2, "Calcular a divisão do primeiro pelo segundo")
    }
}