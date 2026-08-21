package com.example.trybevirtualmenu.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.trybevirtualmenu.R
import com.example.trybevirtualmenu.models.MenuItem

class MenuItemAdapter(
    private val menuItems: List<MenuItem>,
) : RecyclerView.Adapter<MenuItemAdapter.MenuItemViewHolder>() {
    class MenuItemViewHolder(
        itemView: View,
    ) : RecyclerView.ViewHolder(itemView) {
        val image: ImageView = itemView.findViewById(R.id.item_image)
        val name: TextView = itemView.findViewById(R.id.item_name)
        val description: TextView = itemView.findViewById(R.id.item_description)
        val price: TextView = itemView.findViewById(R.id.item_price)
    }

    override fun onCreateViewHolder(
        parent: ViewGroup,
        viewType: Int,
    ): MenuItemViewHolder {
        val view =
            LayoutInflater
                .from(parent.context)
                .inflate(R.layout.item_menu_layout, parent, false)

        return MenuItemViewHolder(view)
    }

    override fun onBindViewHolder(
        holder: MenuItemViewHolder,
        position: Int,
    ) {
        val menuItem = menuItems[position]

        holder.image.setImageResource(menuItem.image)
        holder.name.text = menuItem.name
        holder.description.text = menuItem.description
        holder.price.text = menuItem.price
    }

    override fun getItemCount(): Int = menuItems.size
}
