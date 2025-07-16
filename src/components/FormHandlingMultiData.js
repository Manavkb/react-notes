import React, { useState } from 'react';

function FormHandlingMultiData() {
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  

  export default FormHandlingMultiData;