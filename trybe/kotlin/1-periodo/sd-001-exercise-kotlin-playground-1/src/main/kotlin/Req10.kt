fun findMultiplesOf2(numbers: IntArray): List<Int> {
  return numbers.filter { it % 2 == 0 }
}

fun findMultiplesOf3(numbers: IntArray): List<Int> {
  return numbers.filter { it % 3 == 0 }
}

fun findMultiplesOf2And3(numbers: IntArray): List<Int> {
  return numbers.filter { it % 2 == 0 && it % 3 == 0 }
}

fun main() {
  val numbers = intArrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

  println("Múltiplos de 2: ${findMultiplesOf2(numbers)}")
  println("Múltiplos de 3: ${findMultiplesOf3(numbers)}")
  println("Múltiplos de 2 e 3: ${findMultiplesOf2And3(numbers)}")
}
