import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (<div className="App">
      <Login/>
      <Signup/>
      <Dashboard/>
    </div>
    );
  }
}

export default App;
