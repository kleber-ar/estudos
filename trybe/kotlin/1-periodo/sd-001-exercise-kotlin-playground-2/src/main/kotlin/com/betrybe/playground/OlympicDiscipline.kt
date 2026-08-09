package com.betrybe.playground

class OlympicDiscipline(name: String, code: Int) : Discipline(name, code), Olympic {

  override fun extraClasses(): String {
    return ""
  }

  override fun competition(): String {
    return ""
  }
}
