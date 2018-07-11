import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import WeatherDetails from './WeatherDetails'

class Weather extends Component{
  state = {
    weather: '',
  }

  handleChange = ev => {
    this.setState({ weather: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.history.push(`/weather/${this.state.weather}`)
  }


  render() {
    return(
      <div className="Weather">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              type="text"
              value={this.state.weather}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up the weather!
            </button>
          </div>
        </form>

        <Route
          path="/weather/:weather"
          component={WeatherDetails}
        />
      </div>
    )
  }
}

export default Weather;