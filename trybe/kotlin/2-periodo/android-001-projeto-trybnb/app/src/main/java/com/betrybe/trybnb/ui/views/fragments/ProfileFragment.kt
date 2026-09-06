package com.betrybe.trybnb.ui.views.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import com.betrybe.trybnb.common.ApiIdlingResource
import com.betrybe.trybnb.data.repository.AuthRepository
import com.betrybe.trybnb.databinding.FragmentProfileBinding
import java.io.IOException
import kotlinx.coroutines.launch
import retrofit2.HttpException

class ProfileFragment : Fragment() {
    private var binding: FragmentProfileBinding? = null
    private val authRepository = AuthRepository()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding =
            FragmentProfileBinding.inflate(
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

        if (login.isNotBlank() && password.isNotBlank()) {
            authenticate(
                login,
                password
            )
        }
    }

    private fun authenticate(
        login: String,
        password: String
    ) {
        viewLifecycleOwner.lifecycleScope.launch {
            try {
                ApiIdlingResource.increment()

                val response =
                    authRepository.login(
                        login,
                        password
                    )

                if (response.isSuccessful) {
                    Toast
                        .makeText(
                            requireContext(),
                            "Login feito com sucesso!",
                            Toast.LENGTH_SHORT
                        ).show()
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
