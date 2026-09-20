function CartItem({ plant, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <p>{plant.name}</p>
      <section>
        <button onClick={() => removeFromCart(plant)}>-</button>
        <h5>Quantity: {plant.quantity ? plant.quantity : "no quantity"}</h5>
        <button onClick={() => addToCart(plant)}>+</button>
      </section>
    </li>
  );
}

export default CartItem;
