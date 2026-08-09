fun multiplyLists(list1: List<Int>, list2: List<Int>, result: MutableList<Int>) {
  for (i in list1.indices) {
    result.add(list1[i] * list2[i])
  }
}

fun main() {
  val list1 = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  val list2 = listOf(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
  val result = mutableListOf<Int>()

  multiplyLists(list1, list2, result)

  println(result)
}
