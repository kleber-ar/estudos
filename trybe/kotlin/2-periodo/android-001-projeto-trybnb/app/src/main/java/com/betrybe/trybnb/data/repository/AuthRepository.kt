package com.betrybe.trybnb.data.repository

import com.betrybe.trybnb.data.config.RetrofitConfig
import com.betrybe.trybnb.data.models.AuthRequest
import com.betrybe.trybnb.data.models.AuthResponse
import retrofit2.Response

class AuthRepository {
    private val apiService = RetrofitConfig.apiService

    suspend fun login(
        username: String,
        password: String
    ): Response<AuthResponse> {
        val request =
            AuthRequest(
                username = username,
                password = password
            )

        return apiService.createToken(request)
    }
}
