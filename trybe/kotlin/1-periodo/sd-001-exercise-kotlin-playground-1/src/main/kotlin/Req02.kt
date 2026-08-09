fun calculateCommission(salesAmount: Double): Double {
  return salesAmount * 0.04
}

fun calculateFinalSalary(baseSalary: Double, commission: Double): Double {
  return baseSalary + commission
}

fun main() {
  val baseSalary = readLine()?.toDoubleOrNull()
  val salesAmount = readLine()?.toDoubleOrNull()

  if (baseSalary != null && salesAmount != null) {
    val commission = calculateCommission(salesAmount)
    val finalSalary = calculateFinalSalary(baseSalary, commission)

    println("Comissão: $commission")
    println("Salário final: $finalSalary")
  }
}
