package com.betrybe.playground

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class DirectorClassTest {
    @Test
    @DisplayName("7 - Crie uma classe chamada `Director`")
    fun testDirectorClass() {
        val directorClassName = "com.betrybe.playground.Director"
        assertDoesNotThrow("A classe Director não existe") { Class.forName(directorClassName).kotlin }

        val directorClass = Class.forName(directorClassName).kotlin
        assertTrue(
            directorClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            directorClass.members.any { it.name == "age" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo age: Int"
        )
        assertTrue(
            directorClass.members.any { it.name == "email" && it.returnType == String::class.createType() },
            "A classe não possui o atributo email: String"
        )
        assertTrue(
            directorClass.members.any { it.name == "functionId" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo functionId: Int"
        )
        assertTrue(
            directorClass.members.any { it.name == "startTime" && it.returnType == String::class.createType() },
            "A classe não possui o atributo startTime: String"
        )
        assertTrue(
            directorClass.members.any { it.name == "endTime" && it.returnType == String::class.createType() },
            "A classe não possui o atributo endTime: String"
        )
        assertTrue(
            directorClass.supertypes.any { it.toString() == "com.betrybe.playground.Collaborator" },
            "A não faz herança com a classe Collaborator"
        )
    }
}