package com.betrybe.currencyview.data.api

import com.betrybe.currencyview.data.models.CurrencyRateResponse
import com.betrybe.currencyview.data.models.CurrencySymbolResponse
import retrofit2.http.GET
import retrofit2.http.Query

interface ApiService {
    @GET("v2/currencies")
    suspend fun getSymbols(): List<CurrencySymbolResponse>

    @GET("v2/rates")
    suspend fun getLatestRates(
        @Query("base") base: String,
    ): List<CurrencyRateResponse>
}
