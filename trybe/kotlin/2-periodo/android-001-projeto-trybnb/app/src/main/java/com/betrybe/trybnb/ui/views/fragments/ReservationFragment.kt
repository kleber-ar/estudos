package com.betrybe.trybnb.ui.views.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.betrybe.trybnb.common.ApiIdlingResource
import com.betrybe.trybnb.data.repository.BookingRepository
import com.betrybe.trybnb.databinding.FragmentReservationBinding
import com.betrybe.trybnb.ui.views.adapters.ReservationAdapter
import kotlinx.coroutines.launch

class ReservationFragment : Fragment() {
    private var binding: FragmentReservationBinding? = null
    private val bookingRepository = BookingRepository()
    private val reservationAdapter = ReservationAdapter()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding =
            FragmentReservationBinding.inflate(
                inflater,
                container,
                false
            )

        return binding!!.root
    }

    override fun onViewCreated(
        view: View,
        savedInstanceState: Bundle?
    ) {
        super.onViewCreated(
            view,
            savedInstanceState
        )

        binding!!.reservationRecyclerView.apply {
            layoutManager = LinearLayoutManager(requireContext())
            adapter = reservationAdapter
        }

        loadReservations()
    }

    private fun loadReservations() {
        viewLifecycleOwner.lifecycleScope.launch {
            try {
                ApiIdlingResource.increment()

                val reservations = bookingRepository.getBookings()

                reservationAdapter.updateReservations(reservations)

                ApiIdlingResource.decrement()
            } catch (exception: Exception) {
                ApiIdlingResource.decrement()
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        binding = null
    }
}
