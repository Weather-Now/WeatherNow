import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({city: ''})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData)
  }
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
      <button type="submit">Submit</button>
   </form>
  </div>
  )
}
export default Form;

