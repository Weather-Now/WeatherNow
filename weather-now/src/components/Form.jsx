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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter City"
        />
        <button id="submit-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;

