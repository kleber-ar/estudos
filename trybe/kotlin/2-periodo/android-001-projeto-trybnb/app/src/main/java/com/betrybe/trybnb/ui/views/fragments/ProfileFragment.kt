package com.betrybe.trybnb.ui.views.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.trybnb.databinding.FragmentProfileBinding

class ProfileFragment : Fragment() {
    private var binding: FragmentProfileBinding? = null

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?,
    ): View {
        binding =
            FragmentProfileBinding.inflate(
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

        binding!!.loginButtonProfile.setOnClickListener {
            validateFields()
        }
    }

    private fun validateFields() {
        val login =
            binding!!
                .loginInputProfile
                .editText
                ?.text
                .toString()

        val password =
            binding!!
                .passwordInputProfile
                .editText
                ?.text
                .toString()

        binding!!.loginInputProfile.error =
            if (login.isBlank()) {
                "O campo Login é obrigatório"
            } else {
                null
            }

        binding!!.passwordInputProfile.error =
            if (password.isBlank()) {
                "O campo Password é obrigatório"
            } else {
                null
            }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        binding = null
    }
}
