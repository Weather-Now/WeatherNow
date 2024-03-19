import React, { useState } from 'react';
import { convertToAmPm, removeLeadingZero } from '/src/utils/timeConverters.js';


const LocalTime = ({ time }) => {
  const [localTime, setLocalTime] = useState(time);


  console.log(convertToAmPm(localTime))
  return (
    <main id='time-form'>
      <p>{convertToAmPm(localTime)}</p>
    </main>
  );
};

export default LocalTime;
