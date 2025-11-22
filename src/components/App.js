// App.js
import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import Search from './Search';

const BASE_URL = 'http://localhost:6001';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch plants on component mount
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch(`${BASE_URL}/plants`);
      const plantsData = await response.json();
      setPlants(plantsData);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const addPlant = async (newPlant) => {
    try {
      const response = await fetch(`${BASE_URL}/plants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlant),
      });
      const savedPlant = await response.json();
      setPlants([...plants, savedPlant]);
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  const toggleSoldOut = (plantId) => {
    setPlants(plants.map(plant => 
      plant.id === plantId 
        ? { ...plant, soldOut: !plant.soldOut }
        : plant
    ));
  };

  const updatePlantPrice = async (plantId, newPrice) => {
    try {
      const response = await fetch(`${BASE_URL}/plants/${plantId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: newPrice }),
      });
      const updatedPlant = await response.json();
      
      setPlants(plants.map(plant => 
        plant.id === plantId ? updatedPlant : plant
      ));
    } catch (error) {
      console.error('Error updating plant price:', error);
    }
  };

  const deletePlant = async (plantId) => {
    try {
      await fetch(`${BASE_URL}/plants/${plantId}`, {
        method: 'DELETE',
      });
      setPlants(plants.filter(plant => plant.id !== plantId));
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Plantsy Admin</h1>
      </header>
      <main className="app-main">
        <div className="left-panel">
          <NewPlantForm onAddPlant={addPlant} />
        </div>
        <div className="right-panel">
          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <PlantList 
            plants={filteredPlants}
            onToggleSoldOut={toggleSoldOut}
            onUpdatePrice={updatePlantPrice}
            onDeletePlant={deletePlant}
          />
        </div>
      </main>
    </div>
  );
}

export default App;