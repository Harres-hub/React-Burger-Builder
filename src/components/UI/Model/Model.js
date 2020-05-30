import React, { Component } from 'react';
import classes from './Model.css';
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from '../Backdrop/Backdrop';

class Model extends Component{
    shouldComponentUpdate(nextProps, nextState){
            return nextProps.show !== this.props.show;
    }

    componentDidUpdate(){
        console.log("Model did update");
    }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
                <div 
                    style={{
                        transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className={classes.Model}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Model;