package com.betrybe.trybnb.data.repository

import com.betrybe.trybnb.data.config.RetrofitConfig
import com.betrybe.trybnb.data.models.BookingDates
import com.betrybe.trybnb.data.models.CreateBookingRequest
import com.betrybe.trybnb.data.models.CreateBookingResponse
import retrofit2.Response

class CreateBookingRepository {
    private val apiService = RetrofitConfig.apiService

    suspend fun createBooking(
        firstname: String,
        lastname: String,
        checkin: String,
        checkout: String,
        additionalNeeds: String,
        totalPrice: Int,
        depositPaid: Boolean
    ): Response<CreateBookingResponse> {
        val request =
            CreateBookingRequest(
                firstname = firstname,
                lastname = lastname,
                totalprice = totalPrice,
                depositpaid = depositPaid,
                bookingdates =
                BookingDates(
                    checkin = checkin,
                    checkout = checkout
                ),
                additionalneeds = additionalNeeds
            )

        return apiService.createBooking(request)
    }
}
