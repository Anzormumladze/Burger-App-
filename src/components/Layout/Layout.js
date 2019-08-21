import React,{Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDraw';


class Layout extends Component {
    state={
        showSideDraw:true
    }
    SideDrawClosedHandler = () =>{
        this.setState({showSideDraw:false});
    }
    sideDrawToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDraw:!prevState.showSideDraw}
        });
    }
    render(){
        return(
    <Auxilary>
        <Toolbar drawToggleClicked={this.sideDrawToggleHandler}/>
        <SideDraw 
        open={this.state.showSideDraw}
         closed = {this.SideDrawClosedHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxilary>
)
    }
}
    

export default Layout;