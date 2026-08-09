import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test

class Req07Test {
    @Test
    @DisplayName("7 - Implemente cada função para calcular a média das idades, a quantidade de pessoas com peso superior a 90Kg e altura inferior a 1.50m e a porcentagem de pessoas com idade entre 10 e 30 anos que medem mais de 1.90 metros de uma lista de idades, pesos e alturas")
    fun testCalculateAverageAndCountPeopleAndPercentage() {
        val ages = listOf(25, 30, 35, 40, 45)
        val weights = listOf(80.0, 95.0, 70.0, 100.0, 98.0)
        val heights = listOf(1.95, 1.96, 1.60, 1.96, 1.45)

        assertEquals(35.0, calculateAverage(ages), "Media das idades")
        assertEquals(1, countPeopleWeightHeight(weights, heights), "Quantidade de pessoas superior a 90Kg e altura inferior a 1.50m")
        assertEquals(40, calculatePercentageAgeHeight(ages, heights), "Porcentagem de pessoas entre 10 e 30 anos com mais de 1.90m")
    }
}
