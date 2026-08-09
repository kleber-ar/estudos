fun calculateAverage(number1: Double, number2: Double): Double {
  return (number1 + number2) / 2
}

fun calculateDifference(number1: Double, number2: Double): Double {
  return if (number1 >= number2) {
    number1 - number2
  } else {
    number2 - number1
  }
}

fun calculateProduct(number1: Double, number2: Double): Double {
  return number1 * number2
}

fun calculateDivision(number1: Double, number2: Double): Double? {
  if (number2 == 0.0) {
    return null
  }

  return number1 / number2
}

fun main() {
  val number1 = readLine()?.toDoubleOrNull()
  val number2 = readLine()?.toDoubleOrNull()

  if (number1 != null && number2 != null) {
    println("Média: ${calculateAverage(number1, number2)}")
    println("Diferença: ${calculateDifference(number1, number2)}")
    println("Produto: ${calculateProduct(number1, number2)}")
    println("Divisão: ${calculateDivision(number1, number2)}")
  }
}
