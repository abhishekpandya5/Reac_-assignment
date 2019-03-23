import React, {Component} from 'react';

class Header extends Component{
    render(){

      let{counter} = this.props;
      
        return(
          <header>
            Header
           <div className= "counter_div"> Counter <span className= "counter_window">{counter}</span> </div>
          </header>
        );
    }
}

export default Header;