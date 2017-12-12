import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class App extends Component {
  state ={
    loggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">

          <p>Welcome to my website</p>

          <hr />
          <button onClick={this.toggleLoggedIn}>{this.state.loggedIn ? 'Log out' : 'Log In'}</button>
          <p>{this.state.loggedIn && 'You are currently logged in'}</p>
          <hr />

          <strong>Navigation: </strong>
          <Link to="/">Home</Link> |
          <Link to="/hello"> Hello</Link> |
          <Link to="/hello/you"> Hello You</Link> |
          <Link to="/goodbye"> Goodbye</Link> |
          <Link to="/contact"> Contact</Link>
          <hr />

          <Route exact path="/hello" component={Hello} />
          <Route path="/hello/:name" component={HelloYou} />
          <Route path="/goodbye" component={Goodbye} />
          <Route path="/contact" component={() => {
            if (this.state.loggedIn) {
              // Proceed
              return <Contact />
            } else {
              // GTFO
              return <Redirect to="/login" />
            }
          }} />
          <Route path="/login" component={Login} />

        </div>
      </Router>
    );
  }
}

const Login = () => (
  <p>Tech debt: Login form goes here!</p>
)

const Hello = () => (
  <p>Hello World!</p>
)

const HelloYou = (props) => (
  <p>Hello {props.match.params.name}</p>
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
