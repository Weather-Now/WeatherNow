import { useState } from "react";

const Form = ({ onCitySearch }) => { 
  const [formData, setFormData] = useState({ city: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySearch(formData.city); 
    setFormData({city: ''})
  };

  return (
    <div>
      <form id="form1" onSubmit={handleSubmit}>
        <input id="input-city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter City"
          aria-label="Enter your city for location-based services"
        />
        <button aria-label="Search for weather in your city" id="submit-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;

