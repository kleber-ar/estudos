package com.betrybe.playground

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import kotlin.reflect.full.createType
import kotlin.test.assertTrue

class PersonClassTest {
    @Test
    @DisplayName("4 - Crie uma classe chamada `Person`")
    fun testPersonClass() {
        val personClassName = "com.betrybe.playground.Person"
        assertDoesNotThrow("A classe Person não existe") { Class.forName(personClassName).kotlin }

        val personClass = Class.forName(personClassName).kotlin
        assertTrue(
            personClass.members.any { it.name == "name" && it.returnType == String::class.createType() },
            "A classe não possui o atributo name: String"
        )
        assertTrue(
            personClass.members.any { it.name == "age" && it.returnType == Int::class.createType() },
            "A classe não possui o atributo age: Int"
        )
        assertTrue(
            personClass.members.any { it.name == "email" && it.returnType == String::class.createType() },
            "A classe não possui o atributo email: String"
        )
    }
}