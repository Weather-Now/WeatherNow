
import { useState } from 'react';
import { Link } from 'react-router-dom';
import moonPhaseData from '../moonPhases.json'
import cityData from '../moonphase.json'

const MoonPhaseButton = () => {

  return (
    <div>
      <Link to="/MoonPhaseFactPage">
      <img  id="moon-button" src='https://i.ibb.co/qFqY1WF/Moon.png' alt="Button"/>
      </Link>
    </div>
  )
}

export default MoonPhaseButton