fun calculateConsumerPrice(factoryCost: Double): Double {
  return when {
    factoryCost <= 12000.0 -> {
      factoryCost + (factoryCost * 0.05)
    }
    factoryCost <= 25000.0 -> {
      factoryCost + (factoryCost * 0.10) + (factoryCost * 0.15)
    }
    else -> {
      factoryCost + (factoryCost * 0.15) + (factoryCost * 0.20)
    }
  }
}

fun main() {
  val factoryCost = readLine()?.toDoubleOrNull()

  if (factoryCost != null) {
    println(calculateConsumerPrice(factoryCost))
  }
}
