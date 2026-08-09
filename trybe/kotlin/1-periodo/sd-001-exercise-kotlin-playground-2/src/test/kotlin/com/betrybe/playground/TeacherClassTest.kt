package com.betrybe.playground

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class TeacherClassTest {
    @Test
    @DisplayName("6 - Crie uma classe chamada `Teacher`")
    fun testTeacherClass() {
        val teacherClassName = "com.betrybe.playground.Teacher"
        assertDoesNotThrow("A classe Teacher não existe") { Class.forName(teacherClassName).kotlin }

        val teacherClass = Class.forName(teacherClassName).kotlin
        assertTrue(
            teacherClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            teacherClass.members.any { it.name == "age" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo age: Int"
        )
        assertTrue(
            teacherClass.members.any { it.name == "email" && it.returnType == String::class.createType() },
            "A classe não possui o atributo email: String"
        )
        assertTrue(
            teacherClass.members.any { it.name == "functionId" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo functionId: Int"
        )
        assertTrue(
            teacherClass.members.any { it.name == "subjects" },
            "A classe não possui o atributo subjects: List<Discipline>"
        )
        assertTrue(
            teacherClass.members.any { it.name == "period" },
            "A classe não possui o atributo period: PeriodEnum"
        )
        assertTrue(
            teacherClass.supertypes.any { it.toString() == "com.betrybe.playground.Collaborator" },
            "A não faz herança com a classe Collaborator"
        )
    }
}