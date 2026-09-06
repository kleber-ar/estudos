package com.betrybe.trybnb.data.repository

import com.betrybe.trybnb.data.config.RetrofitConfig
import com.betrybe.trybnb.data.models.Booking

class BookingRepository {
    private val apiService = RetrofitConfig.apiService

    suspend fun getBookings(): List<Booking> {
        val idsResponse = apiService.getBookingIds()

        if (!idsResponse.isSuccessful) {
            return emptyList()
        }

        val ids =
            idsResponse
                .body()
                ?.take(5)
                ?: return emptyList()

        return ids.mapNotNull { bookingId ->
            val response = apiService.getBooking(bookingId.bookingid)

            if (response.isSuccessful) {
                response.body()
            } else {
                null
            }
        }
    }
}
