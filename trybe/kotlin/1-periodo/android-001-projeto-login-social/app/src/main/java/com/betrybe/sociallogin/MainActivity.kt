package com.betrybe.sociallogin

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.widget.doAfterTextChanged
import com.google.android.material.button.MaterialButton
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val email = findViewById<TextInputEditText>(R.id.email_edit_text)
        val password = findViewById<TextInputEditText>(R.id.password_edit_text)

        val emailLayout =
            findViewById<TextInputLayout>(
                R.id.email_text_input_layout,
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

            if (!emailRegex.matches(email.text.toString())) {
                emailLayout.error = "Email inválido"
            } else {
                emailLayout.error = null
            }
        }
    }
}
