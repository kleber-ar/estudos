package com.betrybe.playground

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class CollaboratorClassTest {
    @Test
    @DisplayName("5 - Crie uma classe chamada `Collaborator`")
    fun testCollaboratorClass() {
        val collaboratorClassName = "com.betrybe.playground.Collaborator"
        assertDoesNotThrow("A classe Collaborator não existe") { Class.forName(collaboratorClassName).kotlin }

        val collaboratorClass = Class.forName(collaboratorClassName).kotlin
        assertTrue(
            collaboratorClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            collaboratorClass.members.any { it.name == "age" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo age: Int"
        )
        assertTrue(
            collaboratorClass.members.any { it.name == "email" && it.returnType == String::class.createType() },
            "A classe não possui o atributo email: String"
        )
        assertTrue(
            collaboratorClass.members.any { it.name == "functionId" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo functionId: Int"
        )
        assertTrue(
            collaboratorClass.supertypes.any { it.toString() == "com.betrybe.playground.Person" },
            "A classe não faz herança com a classe Person"
        )
    }
}