import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuContainer from './components/MenuContainer';

//import InputDishes from './components/InputDishes';


class App extends Component {
  render() {
    return (
      <div className="App">
       <MenuContainer/> 
       {/* <InputDishes/> */}
      </div>
    );
  }
}

export default App;
