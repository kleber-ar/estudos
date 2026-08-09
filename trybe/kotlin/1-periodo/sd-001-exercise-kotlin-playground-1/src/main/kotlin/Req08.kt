fun calculateSumEven(numbers: List<Int>): Int {
  var sum = 0

  for (number in numbers) {
    if (number % 2 == 0) {
      sum += number
    }
  }

  return sum
}

fun calculateSumOdd(numbers: List<Int>): Int {
  var sum = 0

  for (number in numbers) {
    if (number % 2 != 0) {
      sum += number
    }
  }

  return sum
}

fun main() {
  val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  println("Soma dos pares: ${calculateSumEven(numbers)}")
  println("Soma dos ímpares: ${calculateSumOdd(numbers)}")
}
