fun calculateNewSalary(currentSalary: Double): Double {
  return when {
    currentSalary <= 300.0 -> currentSalary * 1.50
    currentSalary <= 500.0 -> currentSalary * 1.40
    currentSalary <= 700.0 -> currentSalary * 1.30
    currentSalary <= 800.0 -> currentSalary * 1.20
    currentSalary <= 1000.0 -> currentSalary * 1.10
    else -> currentSalary * 1.05
  }
}

fun main() {
  val currentSalary = readLine()?.toDoubleOrNull()

  if (currentSalary != null) {
    println(calculateNewSalary(currentSalary))
  }
}
