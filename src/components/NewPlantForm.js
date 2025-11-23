// components/NewPlantForm.js
import React, { useState } from 'react';

function NewPlantForm({ onAddPlant, isLoading = false }) {
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
    
    if (!formData.name.trim() || !formData.image.trim() || !formData.price) {
      alert('Please fill out all fields');
      return;
    }

    // Don't parse the price - send it as string to match test expectation
    const newPlant = {
      name: formData.name.trim(),
      image: formData.image.trim(),
      price: formData.price // Keep as string
    };

    console.log('Submitting plant:', newPlant); // Debug log
    onAddPlant(newPlant);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      image: '',
      price: ''
    });
  };

  return (
    <form className="new-plant-form" onSubmit={handleSubmit} data-testid="new-plant-form">
      <h2>New Plant</h2>
      <div className="form-group">
        <label htmlFor="name">Plant Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Plant name"
          disabled={isLoading}
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
          placeholder="Image URL"
          disabled={isLoading}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          min="0"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          disabled={isLoading}
        />
      </div>
      <button type="submit" className="add-plant-btn" disabled={isLoading}>
        {isLoading ? 'Adding Plant...' : 'Add Plant'}
      </button>
    </form>
  );
}

export default NewPlantForm;