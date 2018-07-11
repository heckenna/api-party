import React, { Component } from 'react'

class WeatherDetails extends Component{
  constructor(props){
    super(props)

    this.state = {
      weather: '',
      error: null,
    }

    this.fetchWeatherData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.weather !== this.props.match.params.weather) {
      this.fetchWeatherData()
    }
  }

  fetchWeatherData = () => {
    const { weather } = this.props.match.params
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather},AU&units=metric`)
      .then(response => response.json())
      .then(weather => this.setState({ weather }))
  }

  render() {
    return(
      <div className="WeatherDetails">
        <h2>
          {/* {this.state.weather} */}
        </h2>
      </div>
    )
  }
}

export default WeatherDetails;