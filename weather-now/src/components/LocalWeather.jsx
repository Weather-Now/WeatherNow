import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import weatherData from '../weather.json';

export default function LocalWeather() {
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const toggleTempUnit = () => setIsFahrenheit(!isFahrenheit);

  const { temp_c, temp_f, condition } = weatherData.current;

  return (
    <main id="weather">
        <img src={`https:${condition.icon}`} alt="Weather Icon" id="weather-icon" />


        <p id="weather-condition">{condition.text}</p>

        <h2 id='temp'>{isFahrenheit ? `${temp_f}°` : `${temp_c}°`}</h2>

        <div id='toggle-cont'>
          <button className='toggle-button' onClick={toggleTempUnit}>C</button>
          <button className='toggle-button' onClick={toggleTempUnit}>F</button>
        </div>


        <Link id="sunrise-button" to="/LocalSunrise">Sunset/Sunrise</Link>
    </main>
  );
}
