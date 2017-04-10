import {API_KEY} from '../api_key/api_key'
import axios from 'axios'



const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const finalUrl = `${url}&q=${city},us`
    const request = axios.get(finalUrl)
    // const request = fetch(finalUrl)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

// export function fetchWeather(data) {
//     return {
//         type: FETCH_WEATHER,
//         payload: data
//     };
// }

// export function fetchWeatherApi(city) {
//     return (dispatch) => {
//         fetch(finalUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((data) => dispatch(fetchWeather(data)))
//     };
// }