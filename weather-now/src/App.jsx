import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocalWeather from './components/LocalWeather';
import LocalSunrise from './components/LocalSunrise'; 
import Form from './components/Form'
import LocalTime from './components/LocalTime';
import timeData from './time.json';


function App() {
  return (

    <main id='main-container'>
        <div id='empty'>

        </div>
        <div id='time-form'>
          <LocalTime time={timeData.location.localtime} />
          <Form id="form1"/>
        </div>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<LocalWeather />} />
              <Route path="/LocalSunrise" element={<LocalSunrise />} />
            </Routes>
          </Router>
        </div>
    </main>
  );
}

export default App;