package com.example.trybevirtualmenu.interfaces

import com.example.trybevirtualmenu.models.MenuItem

interface MenuItemListener {
    fun onMenuItemClick(menuItem: MenuItem)
}
