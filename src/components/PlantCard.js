import React, { useState } from "react";

function PlantCard({ plant, soldOut }) {
  const [sold, setSold] = useState(plant.sold || false)

  function handlesoldOut() {
    soldOut(plant)
    setSold(true)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!sold ? (<button className="primary" onClick={handlesoldOut}>In Stock</button>) : (<button>Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;