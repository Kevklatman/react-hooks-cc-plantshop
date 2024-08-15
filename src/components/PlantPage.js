import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, soldOut }) {
  const [searchPlant, setSearchPlant] = useState("")

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchPlant))
  
  return (
    <main>
      <NewPlantForm  addPlant={addPlant}/>
      <Search setSearchPlant={setSearchPlant}/>
      <PlantList plants={filteredPlants} soldOut={soldOut}/>
    </main>
  );
}

export default PlantPage;