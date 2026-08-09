fun calculateAverage(ages: List<Int>): Double {
  return ages.average()
}

fun countPeopleWeightHeight(weights: List<Double>, heights: List<Double>): Int {
  var count = 0

  for (i in weights.indices) {
    if (weights[i] > 90.0 && heights[i] < 1.50) {
      count++
    }
  }

  return count
}

fun calculatePercentageAgeHeight(ages: List<Int>, heights: List<Double>): Int {
  var count = 0

  for (i in ages.indices) {
    if (ages[i] in 10..30 && heights[i] > 1.90) {
      count++
    }
  }

  return (count * 100) / ages.size
}

fun main() {
  val ages = listOf(25, 30, 35, 40, 45)
  val weights = listOf(80.0, 95.0, 70.0, 100.0, 98.0)
  val heights = listOf(1.95, 1.96, 1.60, 1.96, 1.45)

  println("Média das idades: ${calculateAverage(ages)}")
  println("Peso > 90kg e altura < 1.50m: " + countPeopleWeightHeight(weights, heights))
  println("Porcentagem: " + calculatePercentageAgeHeight(ages, heights) + "%")
}
