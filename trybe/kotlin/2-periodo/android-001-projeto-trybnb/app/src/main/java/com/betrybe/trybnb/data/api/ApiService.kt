package com.betrybe.trybnb.data.api

import com.betrybe.trybnb.data.models.AuthRequest
import com.betrybe.trybnb.data.models.AuthResponse
import com.betrybe.trybnb.data.models.Booking
import com.betrybe.trybnb.data.models.BookingId
import com.betrybe.trybnb.data.models.CreateBookingRequest
import com.betrybe.trybnb.data.models.CreateBookingResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.POST
import retrofit2.http.Path

interface ApiService {
    @POST("auth")
    suspend fun createToken(
        @Body request: AuthRequest,
    ): Response<AuthResponse>

    @GET("booking")
    suspend fun getBookingIds(): Response<List<BookingId>>

    @Headers("Accept: application/json")
    @GET("booking/{id}")
    suspend fun getBooking(
        @Path("id") id: Int,
    ): Response<Booking>

    @Headers("Accept: application/json")
    @POST("booking")
    suspend fun createBooking(
        @Body request: CreateBookingRequest,
    ): Response<CreateBookingResponse>
}
