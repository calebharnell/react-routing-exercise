import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <p>Welcome to my website</p>

          <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={Goodbye} />

        </div>
      </Router>
    );
  }
}

const Hello = () => (
  <p>Hello World!</p>
)

const Goodbye = () => (
  <p>Goodbye cruel World!</p>
)

export default App;
