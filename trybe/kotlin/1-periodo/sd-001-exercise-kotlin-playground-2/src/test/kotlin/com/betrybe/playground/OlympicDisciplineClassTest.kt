package com.betrybe.playground

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class OlympicDisciplineClassTest {
    @Test
    @DisplayName("9 - Crie uma classe chamada `OlympicDiscipline`")
    fun testOlympicDisciplineClass() {
        val olympicDisciplineClassName = "com.betrybe.playground.OlympicDiscipline"
        assertDoesNotThrow("A classe OlympicDiscipline não existe") { Class.forName(olympicDisciplineClassName).kotlin }

        val olympicDisciplineClass = Class.forName(olympicDisciplineClassName).kotlin
        assertTrue(
            olympicDisciplineClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            olympicDisciplineClass.members.any { it.name == "code" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo code: Int"
        )
        assertTrue(
            olympicDisciplineClass.supertypes.any { it.toString() == "com.betrybe.playground.Discipline" },
            "A classe não faz herança com a classe Discipline"
        )
        assertTrue(
            olympicDisciplineClass.supertypes.any { it.toString() == "com.betrybe.playground.Olympic" },
            "A classe não implementa a interface Olympic"
        )
    }
}
