import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals


class Req06Test {
    @Test
    @DisplayName("6 - Implemente a função para receber um salário e calcular a porcentagem de aumento")
    fun testCalculateNewSalaryUpTo300() {
        val resultUpTo300 = calculateNewSalary(200.0)
        assertEquals(300.0, resultUpTo300, 0.01, "Calcular salário ate 300 reais")

        val resultBetween300An500 = calculateNewSalary(400.0)
        assertEquals(560.0, resultBetween300An500, 0.01, "Calcular salário entre 300.01 e 500 reais")

        val resultBetween500An700 = calculateNewSalary(600.0)
        assertEquals(780.0, resultBetween500An700, 0.01, "Calcular salário entre 500.01 e 700 reais")

        val resultBetween700An800 = calculateNewSalary(750.0)
        assertEquals(900.0, resultBetween700An800, 0.01, "Calcular salário entre 700.01 e 800 reais")

        val resultBetween800An1000 = calculateNewSalary(900.0)
        assertEquals(990.0, resultBetween800An1000, 0.01, "Calcular salário entre 800.01 e 1000 reais")

        val resultAbove1000 = calculateNewSalary(1200.0)
        assertEquals(1260.0, resultAbove1000, 0.01, "Calcular salário acima de 1000 reais")
    }
}