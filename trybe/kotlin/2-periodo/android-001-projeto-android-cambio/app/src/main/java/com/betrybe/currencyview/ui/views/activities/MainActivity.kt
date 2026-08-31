package com.betrybe.currencyview.ui.views.activities

import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.ArrayAdapter
import android.widget.AutoCompleteTextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.betrybe.currencyview.R
import com.betrybe.currencyview.common.ApiIdlingResource
import com.betrybe.currencyview.data.api.ApiService
import com.betrybe.currencyview.ui.adapters.CurrencyRateAdapter
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import retrofit2.HttpException
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.io.IOException

class MainActivity : AppCompatActivity() {
    private lateinit var currencySelection: AutoCompleteTextView
    private lateinit var loadCurrencyState: View
    private lateinit var selectCurrencyState: View
    private lateinit var waitingResponseState: View
    private lateinit var currencyRatesState: RecyclerView

    private lateinit var apiService: ApiService
    private lateinit var currencyRateAdapter: CurrencyRateAdapter

    private var currencyNames: Map<String, String> = emptyMap()

    private val coroutineScope =
        CoroutineScope(Dispatchers.Main + SupervisorJob())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initializeViews()
        initializeApi()
        initializeRecyclerView()
        loadCurrencies()
    }

    private fun initializeViews() {
        currencySelection =
            findViewById(R.id.currency_selection_input_layout)

        loadCurrencyState =
            findViewById(R.id.load_currency_state)

        selectCurrencyState =
            findViewById(R.id.select_currency_state)

        waitingResponseState =
            findViewById(R.id.waiting_response_state)

        currencyRatesState =
            findViewById(R.id.currency_rates_state)
    }

    private fun initializeApi() {
        apiService =
            Retrofit
                .Builder()
                .baseUrl("https://api.frankfurter.dev/")
                .addConverterFactory(
                    GsonConverterFactory.create(),
                ).build()
                .create(ApiService::class.java)
    }

    private fun initializeRecyclerView() {
        currencyRateAdapter = CurrencyRateAdapter()

        currencyRatesState.layoutManager =
            LinearLayoutManager(this)

        currencyRatesState.adapter = currencyRateAdapter
    }

    private fun loadCurrencies() {
        loadCurrencyState.visibility = View.VISIBLE
        selectCurrencyState.visibility = View.GONE
        waitingResponseState.visibility = View.GONE
        currencyRatesState.visibility = View.GONE

        coroutineScope.launch {
            ApiIdlingResource.increment()

            try {
                Log.d(
                    "CurrencyView",
                    "Buscando moedas...",
                )

                val response =
                    withContext(Dispatchers.IO) {
                        apiService.getSymbols()
                    }

                Log.d(
                    "CurrencyView",
                    "Moedas recebidas: ${response.size}",
                )

                currencyNames =
                    response.associate {
                        it.iso_code to it.name
                    }

                val currencies =
                    response
                        .map { it.iso_code }
                        .sorted()

                val adapter =
                    ArrayAdapter(
                        this@MainActivity,
                        android.R.layout.simple_dropdown_item_1line,
                        currencies,
                    )

                currencySelection.setAdapter(adapter)

                loadCurrencyState.visibility = View.GONE
                selectCurrencyState.visibility = View.VISIBLE

                setupCurrencySelection()
            } catch (exception: HttpException) {
                Log.e(
                    "CurrencyView",
                    "Erro HTTP ao carregar moedas: ${exception.code()}",
                    exception,
                )

                loadCurrencyState.visibility = View.GONE
                selectCurrencyState.visibility = View.VISIBLE
            } catch (exception: IOException) {
                Log.e(
                    "CurrencyView",
                    "Erro de conexão ao carregar moedas",
                    exception,
                )

                loadCurrencyState.visibility = View.GONE
                selectCurrencyState.visibility = View.VISIBLE
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

            Log.d(
                "CurrencyView",
                "Moeda selecionada: $currency",
            )

            if (currency != null) {
                loadCurrencyRates(currency)
            }
        }
    }

    private fun loadCurrencyRates(base: String) {
        selectCurrencyState.visibility = View.GONE
        waitingResponseState.visibility = View.VISIBLE
        currencyRatesState.visibility = View.GONE

        Log.d(
            "CurrencyView",
            "Buscando taxas para: $base",
        )

        coroutineScope.launch {
            ApiIdlingResource.increment()

            try {
                val response =
                    withContext(Dispatchers.IO) {
                        apiService.getLatestRates(base)
                    }

                Log.d(
                    "CurrencyView",
                    "Taxas recebidas: ${response.size}",
                )

                currencyRateAdapter.updateRates(
                    response,
                    currencyNames,
                )

                waitingResponseState.visibility = View.GONE
                currencyRatesState.visibility = View.VISIBLE

                Log.d(
                    "CurrencyView",
                    "RecyclerView exibido com ${response.size} itens",
                )
            } catch (exception: HttpException) {
                Log.e(
                    "CurrencyView",
                    "Erro HTTP ao carregar taxas: ${exception.code()}",
                    exception,
                )

                waitingResponseState.visibility = View.GONE
                selectCurrencyState.visibility = View.VISIBLE
            } catch (exception: IOException) {
                Log.e(
                    "CurrencyView",
                    "Erro de conexão ao carregar taxas",
                    exception,
                )

                waitingResponseState.visibility = View.GONE
                selectCurrencyState.visibility = View.VISIBLE
            } finally {
                ApiIdlingResource.decrement()
            }
        }
    }

    override fun onDestroy() {
        coroutineScope.cancel()
        super.onDestroy()
    }
}
