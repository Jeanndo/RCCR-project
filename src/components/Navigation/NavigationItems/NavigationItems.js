import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" exact>Home</NavigationItem>
    <NavigationItem link ="/news"> News </NavigationItem>
    <NavigationItem link ="/chart-rooms">Chat rooms</NavigationItem>
    <NavigationItem link ="/history">History</NavigationItem>
    <NavigationItem link ="/documents">Community</NavigationItem>
    <NavigationItem link ="/prayer/groups">prayer|groups</NavigationItem>
    <NavigationItem link ="/login">Login</NavigationItem>
    <NavigationItem link ="/signup">Signup</NavigationItem>
    
</ul>
)
export default navigationItems