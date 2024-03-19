import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocalWeather from './components/LocalWeather';
import LocalSunrise from './components/LocalSunrise'; 
import Form from './components/Form'
import MoonPhaseButton from './components/MoonPhaseButton';
import MoonPhaseFactPage from './components/MoonPhaseFactPage';


function App() {
  return (
  <Router>
    <main>
      <Routes>
          <Route path="/" element={
            <>
            <LocalWeather />
            <MoonPhaseButton />
            <Form/>
            </>
           } />
          <Route path="/LocalSunrise" element={
            <>
            <LocalSunrise />
            <Form/>
            </>
          } />
          <Route path='/MoonPhaseFactPage' element={<MoonPhaseFactPage/>} />
        </Routes>
    </main>
  </Router>
  );
}

export default App;