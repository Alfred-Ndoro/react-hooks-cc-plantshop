// components/PlantCard.js
import React from 'react';

function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <div 
      className={`plant-card ${plant.soldOut ? 'sold-out' : ''}`}
      data-testid="plant-item"
    >
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <h4>{plant.name}</h4> {/* This should display the plant name */}
        <p>Price: {plant.price}</p> {/* Make sure price displays correctly */}
        <button 
          onClick={() => onToggleSoldOut(plant.id)}
          className={plant.soldOut ? 'in-stock' : 'mark-sold-out'}
        >
          {plant.soldOut ? 'Mark In Stock' : 'Mark Sold Out'}
        </button>
      </div>
      {plant.soldOut && (
        <div className="sold-out-badge">
          Sold Out
        </div>
      )}
    </div>
  );
}

export default PlantCard;