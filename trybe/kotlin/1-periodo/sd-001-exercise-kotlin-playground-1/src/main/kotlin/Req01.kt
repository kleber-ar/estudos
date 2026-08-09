fun calculateDiscount(originalPrice: Double): Double {
  return originalPrice * 0.9
}

fun main() {
  val price = readLine()?.toDoubleOrNull()

  if (price != null) {
    val discountedPrice = calculateDiscount(price)
    println(discountedPrice)
  }
}
