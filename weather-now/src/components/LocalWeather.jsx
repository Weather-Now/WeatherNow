import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import weatherData from '../weather.json';

export default function LocalWeather() {
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const toggleTempUnit = () => setIsFahrenheit(!isFahrenheit);

  const { temp_c, temp_f, condition } = weatherData.current;

  return (
    <main>
      <div>
        <h2>{isFahrenheit ? `${temp_f}° F` : `${temp_c}° C`}</h2>

        <button onClick={toggleTempUnit}>C</button>
        <button onClick={toggleTempUnit}>F</button>

        <p>{condition.text}</p>

        <img src={`https:${condition.icon}`} alt="Weather Icon" />

        <Link to="/LocalSunrise">View sunset/sunrise</Link>
      </div>
    </main>
  );
}
