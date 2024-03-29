
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoonPhaseButton = () => {

  return (
    <div>
      <Link aria-label='Moonphase button' to="/MoonPhaseFactPage">
      <img  id="moon-button" src='https://i.ibb.co/qFqY1WF/Moon.png' alt="Button"/>
      </Link>
    </div>
  )
}

export default MoonPhaseButton