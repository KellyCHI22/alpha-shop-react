import { createContext, useState } from "react";
import { cartItems } from "constants";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [currentCartItems, setCurrentCartItems] = useState([...cartItems]);

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
    <CartContext.Provider value={{ currentCartItems, handleQuantityClick }}>
      {children}
    </CartContext.Provider>
  );
}
