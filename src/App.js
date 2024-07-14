import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (<div className="App">
      <Login/>
      <Signup/>
    </div>
    );
  }
}

export default App;
