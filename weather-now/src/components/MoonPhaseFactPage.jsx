import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import fetchData from '../utils/fetchData';
import API_KEY from '../config';
import moonPhasesFacts from '../moonPhases.json'

const MoonPhaseFactPage = ({city}) => {
  const [moonData, setMoonData] = useState(null)

  useEffect(() => {
    const fetchMoonData = async () => {
      const [data, error] = await fetchData(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      });
      if(!error){
        const moonPhase = data?.astronomy?.astro?.moon_phase;
        const matchedMoonPhase = moonPhasesFacts.moon_phases.find(phase => phase.phase === moonPhase)
        setMoonData(matchedMoonPhase)
      }
    }
    fetchMoonData();
  }, [city])

  return (
  <div>
    <h1>{moonData?.phase}</h1>
    {moonData && (
      <div>
        <img src={moonData.image_url} alt={moonData.phase} />
        <p>{moonData.fact}</p>
      </div>
    )}
    <div>
      <Link to="/">Go Back</Link>
    </div>
  </div>
  );
};
export default MoonPhaseFactPage;
