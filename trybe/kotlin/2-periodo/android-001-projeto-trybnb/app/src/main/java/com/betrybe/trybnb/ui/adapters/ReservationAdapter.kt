package com.betrybe.trybnb.ui.views.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.betrybe.trybnb.data.models.Booking
import com.betrybe.trybnb.databinding.ListItemReservationBinding

class ReservationAdapter(
    private var reservations: List<Booking> = emptyList()
) : RecyclerView.Adapter<ReservationAdapter.ReservationViewHolder>() {
    override fun onCreateViewHolder(
        parent: ViewGroup,
        viewType: Int
    ): ReservationViewHolder {
        val binding =
            ListItemReservationBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )

        return ReservationViewHolder(binding)
    }

    override fun onBindViewHolder(
        holder: ReservationViewHolder,
        position: Int
    ) {
        holder.bind(reservations[position])
    }

    override fun getItemCount(): Int = reservations.size

    fun updateReservations(reservations: List<Booking>) {
        this.reservations = reservations
        notifyDataSetChanged()
    }

    class ReservationViewHolder(
        private val binding: ListItemReservationBinding
    ) : RecyclerView.ViewHolder(binding.root) {
        fun bind(reservation: Booking) {
            binding.nameItemReservation.text =
                "${reservation.firstname} ${reservation.lastname}"

            binding.checkinItemReservation.text =
                reservation.bookingdates.checkin

            binding.checkoutItemReservation.text =
                reservation.bookingdates.checkout

            binding.additionalNeedsItemReservation.text =
                reservation.additionalneeds ?: ""

            binding.totalPriceItemReservation.text =
                reservation.totalprice.toString()

            val depositIcon =
                if (reservation.depositpaid) {
                    com.betrybe.trybnb.R.drawable.ic_depositpaid_true
                } else {
                    com.betrybe.trybnb.R.drawable.ic_depositpaid_false
                }

            binding.depositpaidItemReservation.setImageResource(
                depositIcon
            )
        }
    }
}
