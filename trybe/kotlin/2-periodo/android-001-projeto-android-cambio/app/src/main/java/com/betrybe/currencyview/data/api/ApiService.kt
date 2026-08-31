package com.betrybe.currencyview.data.api

import com.betrybe.currencyview.data.models.CurrencyRateResponse
import com.betrybe.currencyview.data.models.CurrencySymbolResponse
import retrofit2.http.GET
import retrofit2.http.Query

interface ApiService {
    @GET("symbols?access_key=gKSrABlHD03DgJxz5bn3CKCC0XK4gY01")
    suspend fun getSymbols(): CurrencySymbolResponse

    @GET("latest?access_key=gKSrABlHD03DgJxz5bn3CKCC0XK4gY01")
    suspend fun getLatestRates(
        @Query("base") base: String,
    ): CurrencyRateResponse
}
