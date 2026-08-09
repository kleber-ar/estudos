package com.betrybe.playground

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.test.assertTrue

class PeriodEnumTest {
    @Test
    @DisplayName("1 - Crie uma Enum Class chamada `PeriodEnum`")
    fun testPeriodEnum() {
        val periodEnumName = "com.betrybe.playground.PeriodEnum"
        assertDoesNotThrow("A classe PeriodEnum não existe") { Class.forName(periodEnumName).kotlin }
    }
}