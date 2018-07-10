import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>
            There aint no party like an API party.
          </h3>
          <h1>
            API Party
          </h1>
          
        </header>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
        </ul>

        <Route path="/github" render={() => <h3>GitHub!</h3>}/>
      </div>
    );
  }
}

export default App;
