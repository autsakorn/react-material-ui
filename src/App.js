import React, { Component } from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
injectTapEventPlugin();

class App extends Component {
  handleTouchTap(){

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MuiThemeProvider>
          <RaisedButton onTouchTap={this.handleTouchTap} label="Default" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
