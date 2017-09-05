import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Standard from './Standard';
import Expert from './Expert';
class App extends Component {
  constructor () {
    super()
    this.handleClick= this.handleClick.bind(this);
    this.state = {
      currentNumber: "",
      showStandard: false,
      ShowExpert: false
    }
  }
  handleClick() {
    this.setState({
      showShowStandard: true,
      ShowExpert: true

    });
  }
  render() {
    return (
      <div className="app">
        <h1>Start Game</h1>
        <Buttons />
        <Standard /> 
        <Expert />  
      </div>
    );
  }
}
export default App;
