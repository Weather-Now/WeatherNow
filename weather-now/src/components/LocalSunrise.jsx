import React, { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
import API_KEY from '../config';
import { convertToAmPm, removeLeadingZero } from '/src/utils/timeConverters.js';

function LocalSunrise({ city }) {
  const [sunriseData, setSunriseData] = useState(null);

  useEffect(() => {
    if (city) {
      const url = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${encodeURIComponent(city)}`;
      const options = {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }
      };

      fetchData(url, options)
        .then(data => setSunriseData(data))
        .catch(error => console.error("Failed to fetch data:", error));
    }
  }, [city]);

  if (!sunriseData) return <div>Loading...</div>;

  return (
    <div>
      <p>{`Sunrise: ${removeLeadingZero(sunriseData?.astronomy?.astro?.sunrise)}`}</p>
      <p>{`Sunset: ${removeLeadingZero(sunriseData?.astronomy?.astro?.sunset)}`}</p>
    </div>
  );
}

export default LocalSunrise;
