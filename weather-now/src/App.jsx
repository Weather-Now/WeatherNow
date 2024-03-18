import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocalWeather from './components/LocalWeather';
import LocalSunrise from './components/LocalSunrise'; 

function App() {
  return (
    <main>
    <Router>
      <Routes>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/LocalSunrise" element={<LocalSunrise />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;