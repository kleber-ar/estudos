import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals


class Req02Test {
    @Test
    @DisplayName("2 - Implemente cada função para calcular a comissão e o salário final de um funcionário")
    fun testCalculateCommissionAndFinalSalary() {
        val salesAmount = 1000.0
        val expectedCommission = 40.0
        val baseSalary = 1000.0
        val expectedFinalSalary = 1040.0

        val commission = calculateCommission(salesAmount)
        assertEquals(expectedCommission, commission, "Calcular comissão sobre uma venda específica")

        val finalSalary = calculateFinalSalary(baseSalary, commission)
        assertEquals(expectedFinalSalary, finalSalary, "Calcular o salário final com comissão aplicada")
    }
}