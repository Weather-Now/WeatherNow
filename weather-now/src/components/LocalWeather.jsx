import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import fetchData from '../utils/fetchData';
import API_KEY from '../config';

export default function LocalWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const [data, error] = await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      });

      if (!error) {
        setWeatherData(data);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) return <div>Loading...</div>;

  const { temp_c, temp_f, condition } = weatherData.current;

  return (
    <main id="weather">
        <img src={`https:${condition.icon}`} alt="Weather Icon" id="weather-icon" />
        <p id="weather-condition">{condition.text}</p>
        <h2 id='temp'>{isFahrenheit ? `${temp_f}°` : `${temp_c}°`}</h2>
        <div id='toggle-cont'>
          <button className='toggle-button' onClick={() => setIsFahrenheit(false)}>C</button>
          <button className='toggle-button' onClick={() => setIsFahrenheit(true)}>F</button>
        </div>
        <Link id="sunrise-button" to="/LocalSunrise">Sunset/Sunrise</Link>
    </main>
  );
}
