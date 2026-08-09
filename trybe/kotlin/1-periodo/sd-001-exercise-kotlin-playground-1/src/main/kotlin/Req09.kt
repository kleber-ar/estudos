fun calculateFinalPrice(carValue: Double, installment: Int, surcharges: Array<Double>): Double {
  if (installment == 1) {
    return carValue * 0.80
  }

  val surcharge =
          when (installment) {
            12 -> surcharges[0]
            24 -> surcharges[1]
            36 -> surcharges[2]
            48 -> surcharges[3]
            60 -> surcharges[4]
            else -> 0.0
          }

  return carValue + (carValue * surcharge)
}

fun main() {
  val carValue = readLine()?.toDoubleOrNull()

  if (carValue != null) {
    val surcharges = arrayOf(0.06, 0.12, 0.18, 0.24, 0.30)

    println("À vista: ${calculateFinalPrice(carValue, 1, surcharges)}")
    println("12 parcelas: ${calculateFinalPrice(carValue, 12, surcharges)}")
    println("24 parcelas: ${calculateFinalPrice(carValue, 24, surcharges)}")
    println("36 parcelas: ${calculateFinalPrice(carValue, 36, surcharges)}")
    println("48 parcelas: ${calculateFinalPrice(carValue, 48, surcharges)}")
    println("60 parcelas: ${calculateFinalPrice(carValue, 60, surcharges)}")
  }
}
