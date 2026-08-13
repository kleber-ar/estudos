package com.betrybe.sociallogin

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.widget.doAfterTextChanged
import com.google.android.material.button.MaterialButton
import com.google.android.material.snackbar.Snackbar
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val email =
            findViewById<TextInputEditText>(
                R.id.email_edit_text,
            )

        val password =
            findViewById<TextInputEditText>(
                R.id.password_edit_text,
            )

        val emailLayout =
            findViewById<TextInputLayout>(
                R.id.email_text_input_layout,
            )

        val passwordLayout =
            findViewById<TextInputLayout>(
                R.id.password_text_input_layout,
            )

        val loginButton =
            findViewById<MaterialButton>(
                R.id.login_button,
            )

        fun updateLoginButton() {
            loginButton.isEnabled =
                !email.text.isNullOrEmpty() &&
                !password.text.isNullOrEmpty()
        }

        email.doAfterTextChanged {
            updateLoginButton()
        }

        password.doAfterTextChanged {
            updateLoginButton()
        }

        loginButton.setOnClickListener {
            val emailRegex =
                Regex("^[A-Za-z0-9.]+@[A-Za-z]+\\.[A-Za-z]+$")

            val emailIsValid =
                emailRegex.matches(email.text.toString())

            val passwordIsValid =
                password.text.toString().length > 4

            if (!emailIsValid) {
                emailLayout.error = "Email inválido"
            } else {
                emailLayout.error = null
            }

            if (!passwordIsValid) {
                passwordLayout.error =
                    "Senha deve ter mais de 4 caracteres"
            } else {
                passwordLayout.error = null
            }

            if (emailIsValid && passwordIsValid) {
                Snackbar
                    .make(
                        loginButton,
                        "Login efetuado com sucesso",
                        Snackbar.LENGTH_LONG,
                    ).show()
            }
        }
    }
}
