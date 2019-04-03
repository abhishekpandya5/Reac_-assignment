import React, {Component} from 'react';

class Counter extends Component{

    render(){

        let{name, count, handleIncrease, handleDecrease} = this.props;

        return(
            <div className = "counter_card">
                <span> {name} </span>

                <div className = "counter_window">
                   {count}
                </div>
                
                <div className = "btn_div">
                    <button 
                        className = "primary_btn" 
                         onClick = { () => handleIncrease(name) }
                    >
                     + 
                    </button>

                    <button 
                        className = "primary_btn" 
                         onClick = { () => handleDecrease(name) }
                    > 
                     - 
                    </button>
                </div>
             
            </div>
        )
    }
}

export default Counter;