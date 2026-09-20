import { useState } from "react";
import PlantsList from "./PlantsList/PlantsList.jsx";
import Cart from "./Cart/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let matches = cart.some((existingItem) => item.id === existingItem.id);

    if (matches) {
      setCart(
        cart.map((existingItem) =>
          item.id === existingItem.id
            ? { ...existingItem, quantity: (existingItem.quantity ?? 0) + 1 }
            : existingItem,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    return;
  }

  function removeFromCart(itemToRemove) {
    // if quantity is 0, remove plant from the cart. If quantity is greater than 1, lower quantity
    if (itemToRemove.quantity > 1) {
      setCart(
        cart.map((existingItem) =>
          itemToRemove.id === existingItem.id
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem,
        ),
      );
    } else {
      setCart((cart) => cart.filter((item) => item !== itemToRemove));
    }

    return;
  }

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantsList addToCart={addToCart}></PlantsList>
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        ></Cart>
      </main>
    </>
  );
}
