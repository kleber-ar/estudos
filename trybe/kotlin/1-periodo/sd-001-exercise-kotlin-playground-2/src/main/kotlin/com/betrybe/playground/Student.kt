package com.betrybe.playground

class Student(
        name: String,
        age: Int,
        email: String,
        val enrollmentNumber: Int,
        val subjects: List<Discipline>,
        val academicPeriod: PeriodEnum
) : Person(name, age, email)
