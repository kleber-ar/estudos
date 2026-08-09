import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req03Test {
    @Test
    @DisplayName("3 - Implemente cada função para calcular a idade da pessoa em anos, meses, dias e semanas")
    fun testCalculateYearsAndMonthsAndDaysAndWeeks() {
        val birthYear = 1990
        val currentYear = 2023
        val expectedYears = 33
        val expectedMonths = 396
        val expectedDays: Long = 12053
        val expectedWeeks: Long = 1721

        val years = calculateYears(birthYear, currentYear)
        assertEquals(expectedYears, years, "Calcular a quantidade de anos da pessoa")

        val months = calculateMonths(birthYear, currentYear)
        assertEquals(expectedMonths, months, "Calcular a quantidade de anos da pessoa em meses")

        val days = calculateDays(birthYear, currentYear)
        assertEquals(expectedDays, days, "Calcular a quantidade de anos da pessoa em dias")

        val weeks = calculateWeeks(birthYear, currentYear)
        assertEquals(expectedWeeks, weeks, "Calcular a quantidade de anos da pessoa em semanas")
    }
}