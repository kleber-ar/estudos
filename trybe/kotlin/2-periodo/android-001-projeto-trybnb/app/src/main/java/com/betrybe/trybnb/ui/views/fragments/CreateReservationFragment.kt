package com.betrybe.trybnb.ui.views.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import com.betrybe.trybnb.R
import com.betrybe.trybnb.common.ApiIdlingResource
import com.betrybe.trybnb.data.repository.CreateBookingRepository
import com.betrybe.trybnb.databinding.FragmentCreateReservationBinding
import kotlinx.coroutines.launch
import retrofit2.HttpException
import java.io.IOException

class CreateReservationFragment : Fragment() {
    private var binding: FragmentCreateReservationBinding? = null
    private val createBookingRepository = CreateBookingRepository()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?,
    ): View {
        binding =
            FragmentCreateReservationBinding.inflate(
                inflater,
                container,
                false,
            )

        return binding!!.root
    }

    override fun onViewCreated(
        view: View,
        savedInstanceState: Bundle?,
    ) {
        super.onViewCreated(
            view,
            savedInstanceState,
        )

        binding!!.createReservationButton.setOnClickListener {
            validateFields()
        }
    }

    private fun validateFields() {
        val firstName =
            binding!!
                .firstNameCreateReservation
                .editText
                ?.text
                .toString()

        val lastName =
            binding!!
                .lastNameCreateReservation
                .editText
                ?.text
                .toString()

        val checkin =
            binding!!
                .checkinCreateReservation
                .editText
                ?.text
                .toString()

        val checkout =
            binding!!
                .checkoutCreateReservation
                .editText
                ?.text
                .toString()

        val additionalNeeds =
            binding!!
                .additionalNeedsCreateReservation
                .editText
                ?.text
                .toString()

        val totalPrice =
            binding!!
                .totalPriceCreateReservation
                .editText
                ?.text
                .toString()

        binding!!.firstNameCreateReservation.error =
            if (firstName.isBlank()) {
                "O campo Nome é obrigatório"
            } else {
                null
            }

        binding!!.lastNameCreateReservation.error =
            if (lastName.isBlank()) {
                "O campo Sobrenome é obrigatório"
            } else {
                null
            }

        binding!!.checkinCreateReservation.error =
            if (checkin.isBlank()) {
                "O campo Checkin é obrigatório"
            } else {
                null
            }

        binding!!.checkoutCreateReservation.error =
            if (checkout.isBlank()) {
                "O campo Checkout é obrigatório"
            } else {
                null
            }

        binding!!.additionalNeedsCreateReservation.error =
            if (additionalNeeds.isBlank()) {
                "O campo Necessidades Adicionais é obrigatório"
            } else {
                null
            }

        binding!!.totalPriceCreateReservation.error =
            if (totalPrice.isBlank()) {
                "O campo Preço Total é obrigatório"
            } else {
                null
            }

        if (
            firstName.isNotBlank() &&
            lastName.isNotBlank() &&
            checkin.isNotBlank() &&
            checkout.isNotBlank() &&
            additionalNeeds.isNotBlank() &&
            totalPrice.isNotBlank()
        ) {
            createReservation(
                firstName = firstName,
                lastName = lastName,
                checkin = checkin,
                checkout = checkout,
                additionalNeeds = additionalNeeds,
                totalPrice = totalPrice,
            )
        }
    }

    private fun createReservation(
        firstName: String,
        lastName: String,
        checkin: String,
        checkout: String,
        additionalNeeds: String,
        totalPrice: String,
    ) {
        viewLifecycleOwner.lifecycleScope.launch {
            try {
                ApiIdlingResource.increment()

                val response =
                    createBookingRepository.createBooking(
                        firstname = firstName,
                        lastname = lastName,
                        checkin = checkin,
                        checkout = checkout,
                        additionalNeeds = additionalNeeds,
                        totalPrice = totalPrice.toInt(),
                        depositPaid =
                            binding!!
                                .depositpaidCreateReservation
                                .isChecked,
                    )

                if (response.isSuccessful) {
                    Toast
                        .makeText(
                            requireContext(),
                            "Reserva feita com sucesso!",
                            Toast.LENGTH_SHORT,
                        ).show()
                    parentFragmentManager
                        .beginTransaction()
                        .replace(
                            R.id.main_fragment_container,
                            ReservationFragment(
                                response.body()?.booking,
                            ),
                        ).commit()
                }

                ApiIdlingResource.decrement()
            } catch (e: HttpException) {
                ApiIdlingResource.decrement()
            } catch (e: IOException) {
                ApiIdlingResource.decrement()
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        binding = null
    }
}
