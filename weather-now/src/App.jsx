import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LocalWeather from "./components/LocalWeather";
import LocalSunrise from "./components/LocalSunrise";
import Form from "./components/Form";
import LocalTime from "./components/LocalTime";
import timeData from "./time.json";
import MoonPhaseButton from "./components/MoonPhaseButton";
import MoonPhaseFactPage from "./components/MoonPhaseFactPage";

function App() {
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
          <LocalTime city={city} /> {/* Assuming LocalTime uses the city prop */}
          <Form onCitySearch={handleCitySearch} />
          <LocalWeather city={city} />
          <MoonPhaseButton />
        </>
      } />
      <Route path="/LocalSunrise" element={<LocalSunrise city={city} />} />
      <Route path='/MoonPhaseFactPage' element={<MoonPhaseFactPage />} />
    </Routes>
  </main>
</Router>

  );
}

export default App;
