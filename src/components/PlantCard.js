// components/PlantCard.js
import React, { useState } from 'react';

function PlantCard({ plant, onToggleSoldOut, onUpdatePrice, onDeletePlant }) {
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [price, setPrice] = useState(plant.price);

  const handlePriceSubmit = (e) => {
    e.preventDefault();
    onUpdatePrice(plant.id, parseFloat(price));
    setIsEditingPrice(false);
  };

  const handleCancelEdit = () => {
    setPrice(plant.price);
    setIsEditingPrice(false);
  };

  return (
    <div className={`plant-card ${plant.soldOut ? 'sold-out' : ''}`}>
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        
        {isEditingPrice ? (
          <form onSubmit={handlePriceSubmit} className="price-edit-form">
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="price-input"
            />
            <div className="price-edit-actions">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" onClick={handleCancelEdit} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="price-section">
            <span className="price">${plant.price}</span>
            <button 
              onClick={() => setIsEditingPrice(true)}
              className="edit-price-btn"
            >
              Edit
            </button>
          </div>
        )}
        
        <div className="plant-actions">
          <button 
            onClick={() => onToggleSoldOut(plant.id)}
            className={`sold-out-btn ${plant.soldOut ? 'in-stock' : 'sold-out'}`}
          >
            {plant.soldOut ? 'Mark In Stock' : 'Mark Sold Out'}
          </button>
          
          <button 
            onClick={() => onDeletePlant(plant.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
        
        {plant.soldOut && <div className="sold-out-badge">Sold Out</div>}
      </div>
    </div>
  );
}

export default PlantCard;