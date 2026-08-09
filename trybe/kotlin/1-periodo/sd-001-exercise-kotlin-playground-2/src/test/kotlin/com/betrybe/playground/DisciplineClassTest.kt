package com.betrybe.playground

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class DisciplineClassTest {
    @Test
    @DisplayName("3 - Crie uma classe chamada `Discipline`")
    fun testDisciplineClass() {
        val disciplineClassName = "com.betrybe.playground.Discipline"
        assertDoesNotThrow("A classe Discipline não existe") { Class.forName(disciplineClassName).kotlin }

        val disciplineClass = Class.forName(disciplineClassName).kotlin
        assertTrue(
            disciplineClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            disciplineClass.members.any { it.name == "code" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo code: Int"
        )
    }
}