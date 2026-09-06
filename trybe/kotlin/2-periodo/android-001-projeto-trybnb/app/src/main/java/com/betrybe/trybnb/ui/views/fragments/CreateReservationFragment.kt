package com.betrybe.trybnb.ui.views.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.trybnb.databinding.FragmentCreateReservationBinding

class CreateReservationFragment : Fragment() {
    private var binding: FragmentCreateReservationBinding? = null

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
    }

    override fun onDestroyView() {
        super.onDestroyView()
        binding = null
    }
}
