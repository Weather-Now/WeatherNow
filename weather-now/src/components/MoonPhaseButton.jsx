
import { useState } from 'react';
import { Link } from 'react-router-dom';
import moonPhaseData from '../moonPhases.json'
import cityData from '../moonphase.json'

const MoonPhaseButton = () => {

  return (
    <div>
      <Link to="/MoonPhaseFactPage">
      <img src='https://www.clker.com/cliparts/v/7/H/g/h/X/crescent-moon-hi.png' alt="Button"/>
      </Link>
    </div>
  )
}

export default MoonPhaseButton