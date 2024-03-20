import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LocalWeather from "./components/LocalWeather";
import LocalSunrise from "./components/LocalSunrise";
import Form from "./components/Form";
import LocalTime from "./components/LocalTime";
import timeData from "./time.json";
import MoonPhaseButton from "./components/MoonPhaseButton";
import MoonPhaseFactPage from "./components/MoonPhaseFactPage";
import { useTheme } from "./components/ThemeContext";

function App() {

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  const [city, setCity] = useState("Brooklyn");

  const handleCitySearch = (city) => {
    setCity(city);
  };

  return (
<Router>
  <main id='main-container'>
    <div id='empty'></div>
    <Routes>
      <Route path="/" element={
        <>
        <div>
        <button onClick={toggleTheme} style={{ border: 'none', background: 'none' }}>
  <img id="darkmode" src="https://i.ibb.co/HCc4ddH/dark-theme-icon-512x512-185rlszm.png" alt="Toggle theme" style={{ width: '32px', height: '32px' }} />
</button>

          <LocalTime city={city} /> {/* Assuming LocalTime uses the city prop */}
          <Form onCitySearch={handleCitySearch} />
        </div>
          <LocalWeather city={city} />
          <MoonPhaseButton />
        </>
      } />
      <Route path="/LocalSunrise" element={
      <>
      <LocalSunrise city={city} />
      <Form onCitySearch={handleCitySearch}/>
      </>
      } />
      <Route path='/MoonPhaseFactPage' element={<MoonPhaseFactPage city = {city}/>} />
    </Routes>
  </main>
</Router>

  );
}

export default App;
