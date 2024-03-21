import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import API_KEY from "../config";
import { removeLeadingZero } from "/src/utils/timeConverters.js";
import { Link } from "react-router-dom";

function LocalSunrise({ city }) {
  const [sunriseData, setSunriseData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      if (city) {
        const url = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${encodeURIComponent(city)}`;
        const options = {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
        };

        const [data, error] = await fetchData(url, options);
        if (error) {
          console.error("Failed to fetch data:", error);
        } else {
          setSunriseData(data);
        }
      }
    };

    fetchDataAsync();
  }, [city]);

  if (!sunriseData) return <div>Loading...</div>;

  const sunrise = removeLeadingZero(sunriseData?.astronomy?.astro?.sunrise);
  const sunset = removeLeadingZero(sunriseData?.astronomy?.astro?.sunset);

  return (
    <div>
      <p aria-label="Sunrise time" className="sun-data">{`Sunrise: ${sunrise}`}</p>
      <p aria-label="Sunset time" className="sun-data">{`Sunset: ${sunset}`}</p>
      <Link aria-label="Return home page" className="back-button" to="/">Back</Link>
    </div>
  );
}

export default LocalSunrise;
