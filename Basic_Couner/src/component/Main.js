import React, {Component} from 'react';

class Main extends Component{
    state = {
        subject : "JavaScript"
    };
    render(){
        return(
            <main>
                Click the button to increase counter value
                <br/>
                <button onClick= {() =>{ this.props.counter(this.state.subject) }}>Counter</button>
                <br/>
                Hello {this.props.name}
                <br/>
                
            </main>
        );
    }
}

export default Main;