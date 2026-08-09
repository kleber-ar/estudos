fun calculateYears(birthYear: Int, currentYear: Int): Int {
  return currentYear - birthYear
}

fun calculateMonths(birthYear: Int, currentYear: Int): Int {
  return calculateYears(birthYear, currentYear) * 12
}

fun calculateDays(birthYear: Int, currentYear: Int): Long {
  val years = calculateYears(birthYear, currentYear)

  var leapYears = 0

  for (year in birthYear until currentYear) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      leapYears++
    }
  }

  return years.toLong() * 365 + leapYears
}

fun calculateWeeks(birthYear: Int, currentYear: Int): Long {
  return calculateDays(birthYear, currentYear) / 7
}

fun main() {
  print("Digite o ano de nascimento: ")
  val birthYear = readLine()?.toIntOrNull()

  print("Digite o ano atual: ")
  val currentYear = readLine()?.toIntOrNull()

  if (birthYear != null && currentYear != null) {
    println("Idade em anos: ${calculateYears(birthYear, currentYear)}")
    println("Idade em meses: ${calculateMonths(birthYear, currentYear)}")
    println("Idade em dias: ${calculateDays(birthYear, currentYear)}")
    println("Idade em semanas: ${calculateWeeks(birthYear, currentYear)}")
  }
}
