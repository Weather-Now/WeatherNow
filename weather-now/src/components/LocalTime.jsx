import React, { useState } from 'react';
import convertToAmPm from '../utils/timeConverters';

const LocalTime = ({ time }) => {
  const [localTime, setLocalTime] = useState(time);


  console.log(convertToAmPm(localTime))
  return (
    <main>
      <p>Local Time: {convertToAmPm(localTime)}</p>
    </main>
  );
};

export default LocalTime;
