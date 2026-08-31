package com.betrybe.currencyview.ui.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.betrybe.currencyview.data.models.CurrencyRateResponse

class CurrencyRateAdapter(
    private var rates: List<CurrencyRateResponse> = emptyList(),
    private var currencyNames: Map<String, String> = emptyMap(),
) : RecyclerView.Adapter<CurrencyRateAdapter.CurrencyRateViewHolder>() {
    class CurrencyRateViewHolder(
        itemView: View,
    ) : RecyclerView.ViewHolder(itemView) {
        val currencyText: TextView =
            itemView.findViewById(android.R.id.text1)
    }

    override fun onCreateViewHolder(
        parent: ViewGroup,
        viewType: Int,
    ): CurrencyRateViewHolder {
        val view =
            LayoutInflater.from(parent.context).inflate(
                android.R.layout.simple_list_item_1,
                parent,
                false,
            )

        return CurrencyRateViewHolder(view)
    }

    override fun onBindViewHolder(
        holder: CurrencyRateViewHolder,
        position: Int,
    ) {
        val rate = rates[position]

        val currencyName =
            currencyNames[rate.quote] ?: "Moeda"

        holder.currencyText.text =
            "${rate.quote} - $currencyName: ${rate.rate}"
    }

    override fun getItemCount(): Int = rates.size

    fun updateRates(
        newRates: List<CurrencyRateResponse>,
        names: Map<String, String>,
    ) {
        rates = newRates
        currencyNames = names
        notifyDataSetChanged()
    }
}
