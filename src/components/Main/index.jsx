import OrderInfo from "./OrderInfo";
import Cart from "./Cart";
import ProgressControl from "./ProgressControl";
import { useState } from "react";
import { cartItems } from "constants";
import { CartContext } from "context/CartContext";

export default function Main() {
  const [orderStep, setOrderStep] = useState("address");
  const [currentCartItems, setCurrentCartItems] = useState([...cartItems]);

  const handleStepButtonClick = (step) => {
    setOrderStep(step);
  };

  const handleQuantityClick = (id, action) => {
    const updatedCartItems = currentCartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          if (action === "add") {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else if (action === "remove") {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity > 0);

    setCurrentCartItems(updatedCartItems);
  };

  return (
    <main>
      <div className="container py-24 px-5 sm:mx-auto sm:grid sm:grid-cols-12 sm:py-24 sm:px-0">
        <CartContext.Provider value={{ currentCartItems, handleQuantityClick }}>
          <OrderInfo orderStep={orderStep} />

          <Cart />
          <ProgressControl
            orderStep={orderStep}
            onStepButtonClick={handleStepButtonClick}
          />
        </CartContext.Provider>
      </div>
    </main>
  );
}
