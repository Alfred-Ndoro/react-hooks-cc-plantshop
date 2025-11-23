// components/PlantList.js
import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onToggleSoldOut }) {
  if (plants.length === 0) {
    return (
      <div className="no-plants" data-testid="no-plants-message">
        <p>No plants found. Add some plants to get started!</p>
      </div>
    );
  }

  return (
    <div className="plant-list" data-testid="plant-list">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;