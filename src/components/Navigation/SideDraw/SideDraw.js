import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDraw.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary';

const sideDraw = (props) => {
    let attachedClasses = [classes.SideDraw,classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDraw,classes.Open]
    }
    return (
        <Auxilary>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Auxilary>
    );
}

export default sideDraw