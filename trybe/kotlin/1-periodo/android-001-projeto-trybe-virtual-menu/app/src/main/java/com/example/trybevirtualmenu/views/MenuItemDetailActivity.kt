package com.example.trybevirtualmenu.views

import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.trybevirtualmenu.R
import com.google.android.material.button.MaterialButton

class MenuItemDetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_menu_item_detail)

        val detailBack: MaterialButton = findViewById(R.id.detail_back)
        val detailImage: ImageView = findViewById(R.id.detail_image)
        val detailName: TextView = findViewById(R.id.detail_name)
        val detailDescription: TextView = findViewById(R.id.detail_description)
        val detailPrice: TextView = findViewById(R.id.detail_price)

        val name = intent.getStringExtra("name")
        val image = intent.getIntExtra("image", 0)
        val description = intent.getStringExtra("description")
        val price = intent.getStringExtra("price")

        detailImage.setImageResource(image)
        detailName.text = name
        detailDescription.text = description
        detailPrice.text = price

        detailBack.setOnClickListener {
            finish()
        }
    }
}
