import React from 'react'
import Logo from '../../../assets/UECCRRRR.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import './toolbar.css'
const toolbar = (props) => {
    return <header className="Toolbar">
       <DrawToggle clicked ={props.toggle} />
          <img src ={Logo} height='80px' width='80px'/>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
    </header>
}
export default toolbar