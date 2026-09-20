import CartItem from "./CartItem";

function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section>
      <h3>Cart</h3>
      <ol>
        {cart.map((plant) => {
          return (
            <CartItem
              key={plant.id}
              plant={plant}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            ></CartItem>
          );
        })}
      </ol>
    </section>
  );
}

export default Cart;
