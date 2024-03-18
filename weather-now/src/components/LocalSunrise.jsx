import React from 'react'; 
import sunriseData from '../sunrise.json';
import { removeLeadingZero } from '../utils/timeConverters';

function LocalSunrise() {
  return (
    <div>
      <p>{`Sunrise: ${removeLeadingZero(sunriseData.astronomy.astro.sunrise)}`}</p>
      <p>{`Sunset: ${removeLeadingZero(sunriseData.astronomy.astro.sunset)}`}</p>
    </div>
  )
}

export default LocalSunrise