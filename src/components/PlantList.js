import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, soldOut}) {
  return (
    <ul className="cards"> {
      plants.map(plant => <PlantCard key={plant.id} plant={plant} soldOut={soldOut}/>)
    }</ul>
  );
}

export default PlantList;