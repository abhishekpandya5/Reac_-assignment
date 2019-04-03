import React, {Component} from 'react';

class Dishes extends Component {

    handleConsoleDetails = () => {
        console.log("Price of " + this.props.dish.name + " is " + this.props.dish.price);
    }

    render(){
        return (
            <React.Fragment>
                
                <ul>
                    <li onClick = {this.handleConsoleDetails}>
                        <h3> {this.props.dish.name} </h3>
                        <p> {this.props.dish.description} </p>
                        <p> {this.props.dish.status} </p>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}

export default Dishes;