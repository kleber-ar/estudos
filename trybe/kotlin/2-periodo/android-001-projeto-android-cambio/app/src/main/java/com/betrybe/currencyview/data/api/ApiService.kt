package com.betrybe.currencyview.data.api

import com.betrybe.currencyview.data.models.CurrencySymbolResponse
import retrofit2.http.GET

interface ApiService {
    @GET("symbols?access_key=gKSrABlHD03DgJxz5bn3CKCC0XK4gY01")
    suspend fun getSymbols(): CurrencySymbolResponse
}
