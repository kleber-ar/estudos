package com.betrybe.trybnb.data.config

import com.betrybe.trybnb.data.api.ApiService
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitConfig {
    private const val BASE_URL = "https://restful-booker.herokuapp.com/"

    private val retrofit =
        Retrofit
            .Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(
                GsonConverterFactory.create()
            ).build()

    val apiService: ApiService =
        retrofit.create(ApiService::class.java)
}
