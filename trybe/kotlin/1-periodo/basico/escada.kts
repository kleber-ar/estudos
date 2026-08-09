
    print("Digite o tamanho do degrau: ")
    val tamanhoDegrau = readln().toDouble()

    print("Digite a altura final da escada: ")
    val alturaEscada = readln().toDouble()

    val quantidadeDegraus = alturaEscada / tamanhoDegrau
    println("São necessários $quantidadeDegraus degraus para alcançar a altura desejada")
