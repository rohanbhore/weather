import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import firstpage from './firstpage';
import secondpage from './secondpage';
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Switch>
        <Route exact path='/' component={firstpage}></Route>
        <Route exact path="/secondpage" component={secondpage}></Route>
      </Switch>
    );
  }
}

export default App;
