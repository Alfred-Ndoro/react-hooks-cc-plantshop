// components/NewPlantForm.js
import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.image || !formData.price) {
      alert('Please fill out all fields');
      return;
    }

    const newPlant = {
      ...formData,
      price: parseFloat(formData.price)
    };

    onAddPlant(newPlant);
    
    // Reset form
    setFormData({
      name: '',
      image: '',
      price: ''
    });
  };

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <h2>Add New Plant</h2>
      
      <div className="form-group">
        <label htmlFor="name">Plant Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter plant name"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />
      </div>
      
      <button type="submit" className="add-plant-btn">
        Add Plant
      </button>
    </form>
  );
}

export default NewPlantForm;