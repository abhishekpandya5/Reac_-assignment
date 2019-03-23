import React, {Component} from 'react';

class Aside extends Component{
    state = {
        subject : "JavaScript"
    };

    render(){
        return(
            <div>
            <aside>
                Aside
            </aside>
            <aside>
                Subject is {this.props.subject}
            </aside>
            </div>     
        );
    }
}

export default Aside;