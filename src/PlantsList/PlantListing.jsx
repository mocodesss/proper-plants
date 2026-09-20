export default function PlantListing({ plant, addToCart }) {
  return (
    <li className="plant-list-item">
      <h3>{plant.image}</h3>
      <h4>{plant.name}</h4>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
