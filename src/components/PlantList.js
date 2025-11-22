// components/PlantList.js
import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onToggleSoldOut, onUpdatePrice, onDeletePlant }) {
  return (
    <div className="plant-list">
      {plants.length === 0 ? (
        <p className="no-plants">No plants found. Add some plants to get started!</p>
      ) : (
        plants.map(plant => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onToggleSoldOut={onToggleSoldOut}
            onUpdatePrice={onUpdatePrice}
            onDeletePlant={onDeletePlant}
          />
        ))
      )}
    </div>
  );
}

export default PlantList;