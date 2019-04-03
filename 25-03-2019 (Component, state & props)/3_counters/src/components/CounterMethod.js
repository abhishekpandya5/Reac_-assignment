import React, {Component} from 'react';
import Counter from './Counter';

class CounterMethod extends Component {

    state = {
        Counter1: 0,
        Counter2: 0,
        Counter3: 0
    }

    increaseSingleCounter = (counterName) => {
       this.setState(
           {
               counterName: ++this.state[counterName]
           }
       )
    };

    decreaseSingleCounter = (counterName) => {
        this.setState(
            {
                counterName: --this.state[counterName]
            }
        )
    };

    increaseAllCounter = () => {
        this.setState(
            {
                Counter1: ++this.state.Counter1,
                Counter2: ++this.state.Counter2,
                Counter3: ++this.state.Counter3
            }
        )
    };

    decreaseAllCounter = () => {
        this.setState(
            {
                Counter1: --this.state.Counter1,
                Counter2: --this.state.Counter2,
                Counter3: --this.state.Counter3
            }
        )
    };

    render(){
        return(
            <div className = "app">
                <div class = "counter_container">
                    <Counter 
                        name = "Counter1"
                        count = {this.state.Counter1}
                        handleIncrease = {this.increaseSingleCounter}
                        handleDecrease = {this.decreaseSingleCounter}
                     />
                    <Counter 
                        name = "Counter2"
                        count = {this.state.Counter2}
                        handleIncrease = {this.increaseSingleCounter}
                        handleDecrease = {this.decreaseSingleCounter}
                    />
                    <Counter 
                        name = "Counter3"
                        count = {this.state.Counter3}
                        handleIncrease = {this.increaseSingleCounter}
                        handleDecrease = {this.decreaseSingleCounter}
                    />
                </div>

                <div className = "btn_container">
                    <button onClick = {this.increaseAllCounter} className = "primary_btn outer_btn">Increase All</button>
                    <button onClick = {this.decreaseAllCounter} className = "primary_btn outer_btn">Decrease All</button>
                </div>
          </div>
        )
    }
}

export default CounterMethod;