import React, { useState } from 'react';
import './App.css';  
import axios from "axios";


function App() {



const [fetchWeather, setFetchWeather] = useState({})
const [location, setLocation] = useState('') 

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5c61c90f5760063f9ba12f741144c0f0&units=metric`

const searchLocation = () => {
 
    axios.get(url).then((response) => {
      setFetchWeather(response.data)
      console.log(response.data)
    })
  
}



  return (
    <>
      <div className='text-center flex flex-col w-2/3 mx-auto'>
        <h1 className='text-4xl mb-3'>Weather App</h1>
        <div className='px-10'>
          <form action="">
            <input 
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter your location"
            type="text" 
            className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline' />
            <input 
            type="button" 
            value="Search" 
            onClick={searchLocation}
            className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mb-3 border border-blue-500 hover:border-transparent rounded' />
          </form>
          <div className='border rounded bg-slate-300'>
            <h2 className='text-4xl'>{fetchWeather.name}</h2>
            <div>
              <div>
                {fetchWeather.weather ? <p>{fetchWeather.weather[0].description}</p> : null}
              </div>
              <div>
                {fetchWeather.main ? <p>Temprature : {fetchWeather.main.temp.toFixed()} °C</p> : null}
              </div>
              <div>
                {fetchWeather.main ? <p>Fells like : {fetchWeather.main.feels_like.toFixed()} °C</p> : null}
              </div>
              <div>
                {fetchWeather.main ? <p>Humidity : {fetchWeather.main.humidity} %</p> : null}
              </div>
              <div>
                {fetchWeather.wind ? <p>Wind Speed : {fetchWeather.wind.speed} MPH</p> : null}
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
