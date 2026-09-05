package com.betrybe.trybnb.ui.views.activities

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.trybnb.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        if (savedInstanceState == null) {
            supportFragmentManager
                .beginTransaction()
                .replace(
                    R.id.main_fragment_container,
                    ReservationFragment(),
                ).commit()
        }

        binding.navigationBottomView.setOnItemSelectedListener { item ->

            val fragment =
                when (item.itemId) {
                    R.id.reservation_menu_item -> ReservationFragment()
                    R.id.create_reservation_menu_item -> CreateReservationFragment()
                    R.id.profile_menu_tem -> ProfileFragment()
                    else -> return@setOnItemSelectedListener false
                }

            supportFragmentManager
                .beginTransaction()
                .replace(R.id.main_fragment_container, fragment)
                .commit()

            true
        }
    }
}
