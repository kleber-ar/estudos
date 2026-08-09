package com.betrybe.playground

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.reflect.full.functions
import kotlin.test.assertTrue

class OlympicInterfaceTest {
    @Test
    @DisplayName("2 - Crie uma interface chamada `Olympic`")
    fun testOlympicInterface() {
        val olympicInterfaceName = "com.betrybe.playground.Olympic"
        assertDoesNotThrow("A interface Olympic não existe") { Class.forName(olympicInterfaceName).kotlin }

        val olympicInterface = Class.forName(olympicInterfaceName).kotlin
        assertTrue(
            olympicInterface.functions.any { it.name == "extraClasses" && it.returnType == String::class.createType() },
            "A função extraClasses(): String não existe"
        )
        assertTrue(
            olympicInterface.functions.any { it.name == "competition" && it.returnType == String::class.createType() },
            "A função competition(): String não existe"
        )
    }
}