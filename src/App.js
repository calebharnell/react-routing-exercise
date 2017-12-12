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

          <strong>Navigation: </strong>
          <Link to="/">Home</Link> |
          <Link to="/hello"> Hello</Link> |
          <Link to="/goodbye"> Goodbye</Link> |
          <Link to="/contact"> Contact</Link>


          <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={Goodbye} />
          <Route path="/contact" component={Contact} />

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

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>Email: test@test.com</p>
  </div>
)

export default App;
