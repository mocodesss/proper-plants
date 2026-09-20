import PLANTS from "../data.js";
import PlantListing from "./PlantListing.jsx";

function PlantsList({ addToCart }) {
  const plants = PLANTS;

  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants-container">
        {plants.map((plant) => (
          <PlantListing
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          ></PlantListing>
        ))}
      </ul>
    </section>
  );
}

export default PlantsList;
