package com.betrybe.currencyview.ui.views.activities

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.AutoCompleteTextView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.RecyclerView
import com.betrybe.currencyview.R
import com.betrybe.currencyview.common.ApiIdlingResource
import com.betrybe.currencyview.data.api.ApiService
import com.betrybe.currencyview.ui.adapters.CurrencyRateAdapter
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class MainActivity : AppCompatActivity() {
    private lateinit var currencySelection: AutoCompleteTextView
    private lateinit var loadCurrencyState: android.view.View
    private lateinit var selectCurrencyState: android.view.View
    private lateinit var waitingResponseState: android.view.View
    private lateinit var currencyRatesState: RecyclerView

    private lateinit var apiService: ApiService
    private lateinit var currencyRateAdapter: CurrencyRateAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initializeViews()
        initializeApi()
        initializeRecyclerView()

        loadCurrencies()
    }

    private fun initializeViews() {
        currencySelection = findViewById(R.id.currency_selection_input_layout)
        loadCurrencyState = findViewById(R.id.load_currency_state)
        selectCurrencyState = findViewById(R.id.select_currency_state)
        waitingResponseState = findViewById(R.id.waiting_response_state)
        currencyRatesState = findViewById(R.id.currency_rates_state)
    }

    private fun initializeApi() {
        apiService =
            Retrofit
                .Builder()
                .baseUrl("https://api.apilayer.com/")
                .addConverterFactory(GsonConverterFactory.create())
                .build()
                .create(ApiService::class.java)
    }

    private fun initializeRecyclerView() {
        currencyRateAdapter = CurrencyRateAdapter()

        currencyRatesState.adapter = currencyRateAdapter
    }

    private fun loadCurrencies() {
        loadCurrencyState.visibility = android.view.View.VISIBLE
        selectCurrencyState.visibility = android.view.View.GONE
        waitingResponseState.visibility = android.view.View.GONE
        currencyRatesState.visibility = android.view.View.GONE

        lifecycleScope.launch {
            ApiIdlingResource.increment()

            try {
                val response =
                    withContext(Dispatchers.IO) {
                        apiService.getSymbols()
                    }

                val currencies = response.symbols

                val adapter =
                    ArrayAdapter(
                        this@MainActivity,
                        android.R.layout.simple_dropdown_item_1line,
                        currencies.keys.toList(),
                    )

                currencySelection.setAdapter(adapter)

                loadCurrencyState.visibility = android.view.View.GONE
                selectCurrencyState.visibility = android.view.View.VISIBLE

                setupCurrencySelection()
            } catch (exception: Exception) {
                loadCurrencyState.visibility = android.view.View.GONE
            } finally {
                ApiIdlingResource.decrement()
            }
        }
    }

    private fun setupCurrencySelection() {
        currencySelection.setOnItemClickListener { _, _, position, _ ->
            val currency =
                currencySelection.adapter
                    ?.getItem(position)
                    ?.toString()

            if (currency != null) {
                loadCurrencyRates(currency)
            }
        }
    }

    private fun loadCurrencyRates(base: String) {
        selectCurrencyState.visibility = android.view.View.GONE
        waitingResponseState.visibility = android.view.View.VISIBLE
        currencyRatesState.visibility = android.view.View.GONE

        lifecycleScope.launch {
            ApiIdlingResource.increment()

            try {
                val response =
                    withContext(Dispatchers.IO) {
                        apiService.getLatestRates(base)
                    }

                currencyRateAdapter.updateRates(response.rates)

                waitingResponseState.visibility = android.view.View.GONE
                currencyRatesState.visibility = android.view.View.VISIBLE
            } catch (exception: Exception) {
                waitingResponseState.visibility = android.view.View.GONE
            } finally {
                ApiIdlingResource.decrement()
            }
        }
    }
}
