import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
        {/* <li><a href="/"> A link</a></li> */}
        <NavigationItem link ='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/' >Checkout</NavigationItem>

   
    </ul>
)

export default navigationItems