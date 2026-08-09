import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Req12Test {
    @Test
    @DisplayName("12 - Implemente a funçao para multiplicar dois números de mesmo índice de uma lista e armazenar em uma terceira lista")
    fun testMultiplyLists() {
        val list1 = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        val list2 = listOf(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
        val result = mutableListOf<Int>()
        val expectedResult = listOf(10, 18, 24, 28, 30, 30, 28, 24, 18, 10)

        multiplyLists(list1, list2, result)

        assertEquals(expectedResult, result)
    }
}