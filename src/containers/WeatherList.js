import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {

renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const tempsC = temps.map(weather => weather-273.15)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lat, lon} = cityData.city.coord
    return (
    <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={tempsC} color={"green"} units="C"/></td>
        <td><Chart data={pressures} color={"red"} units="hPa"/></td>
        <td><Chart data={humidities} color={"purple"} units="%"/></td>
    </tr>
    )
}


    render() {
        console.log(this.props.weather)
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature(c)</th>
                            <th>Presure(hPa)</th>
                            <th>Humidity(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    };
};
export default connect(mapStateToProps)(WeatherList);