import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Aside from './component/Aside';
import Footer from './component/Footer';
import './App.css';

class App extends Component {
  state = {
    counter : 0,
    name : "Abhishek",
    subject : "java"
  };

  incounter = (val) => {

    this.setState(
      { counter : ++this.state.counter ,
        subject : val
      }
    );
  }

    render(){
      return(
        <div className="App">
          <Header counter = {this.state.counter}/>
          <Main counter = {this.incounter}  name = {this.state.name} />
          <Aside subject = {this.state.subject}  />
          <Footer/>
      </div>   
    );
  }
}

export default App;
