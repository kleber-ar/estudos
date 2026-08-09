
    print("Digite a primeira nota: ")
    val nota01 = readln().toDouble()

    print("Digite a primeira nota: ")
    val nota02 = readln().toDouble()

    print("Digite a primeira nota: ")
    val nota03 = readln().toDouble()

    val media = (nota01 + nota02 + nota03) / 3

    if (media >= 0.0 && media < 3.0) {
        println("REPROVADO")
    } else if (media >= 3.0 && media < 7.0) {
        println("EXAME")
    } else {
        println("APROVADO")
    }
