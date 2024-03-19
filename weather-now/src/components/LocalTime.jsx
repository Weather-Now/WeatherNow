import React, { useState, useEffect } from 'react';
import { convertToAmPm } from '/src/utils/timeConverters.js';
import fetchData from '../utils/fetchData';
import API_KEY from '../config';

const LocalTime = ({ city }) => {
  const [localTime, setLocalTime] = useState(null); // Initialize to null

  useEffect(() => {
    const fetchTimeData = async () => {
      const [data, error] = await fetchData(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${city}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      });

      if (!error && data.location && data.location.localtime) {
        setLocalTime(data.location.localtime); // Set to the specific property
      }
    };

    fetchTimeData();
  }, [city]);

  // Conditionally render or process localTime
  const timeString = localTime ? convertToAmPm(localTime) : "Loading...";

  return (
    <main id='time-form'>
      <p>{timeString}</p>
    </main>
  );
};

export default LocalTime;
