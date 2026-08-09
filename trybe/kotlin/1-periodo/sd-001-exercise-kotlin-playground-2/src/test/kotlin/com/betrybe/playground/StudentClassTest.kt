package com.betrybe.playground

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class StudentClassTest {
    @Test
    @DisplayName("8 - Crie uma classe chamada `Student`")
    fun testStudentClass() {
        val studentClassName = "com.betrybe.playground.Student"
        assertDoesNotThrow("A classe Student não existe") { Class.forName(studentClassName).kotlin }

        val studentClass = Class.forName(studentClassName).kotlin
        assertTrue(
            studentClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            studentClass.members.any { it.name == "age" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo age: Int"
        )
        assertTrue(
            studentClass.members.any { it.name == "email" && it.returnType == String::class.createType() },
            "A classe não possui o atributo email: String"
        )
        assertTrue(
            studentClass.members.any { it.name == "enrollmentNumber" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo enrollmentNumber: Int"
        )
        assertTrue(
            studentClass.members.any { it.name == "subjects" },
            "A classe não possui o atributo subjects: List<Discipline>"
        )
        assertTrue(
            studentClass.members.any { it.name == "academicPeriod" },
            "A classe não possui o atributo academicPeriod: PeriodEnum"
        )
        assertTrue(
            studentClass.supertypes.any { it.toString() == "com.betrybe.playground.Person" },
            "A classe não faz herança com a classe Person"
        )
    }
}