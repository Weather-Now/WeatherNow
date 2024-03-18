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

    <main>
      <Router>
        <Routes>
          <Route path="/" element={<LocalWeather />} />
          <Route path="/LocalSunrise" element={<LocalSunrise />} />
        </Routes>
      </Router>
      <Form/>
      <LocalTime time={timeData.location.localtime} />
    </main>
  );
}

export default App;