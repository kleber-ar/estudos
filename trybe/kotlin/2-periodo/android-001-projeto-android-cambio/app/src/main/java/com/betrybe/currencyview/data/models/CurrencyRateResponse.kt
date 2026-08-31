
package com.betrybe.currencyview.data.models

data class CurrencyRateResponse(
    val base: String,
    val date: String,
    val quote: String,
    val rate: Double,
)
