import OrderInfo from "./OrderInfo";
import Cart from "./Cart";
import ProgressControl from "./ProgressControl";
import { useState } from "react";
import { cartItems, orderInfoDefault } from "constants";
import { CartContext } from "context/CartContext";
import { OrderContext } from "context/OrderContext";

export default function Main() {
  // step
  const [orderStep, setOrderStep] = useState("address");
  const handleStepButtonClick = (step) => {
    setOrderStep(step);
  };

  // cartItems
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

  // address info
  const [addressInfo, setAddressInfo] = useState({
    gender: "mr",
    name: "",
    tel: "",
    email: "",
    city: "",
    address: "",
  });
  const handleAddressChange = (e) => {
    setAddressInfo({
      ...addressInfo,
      [e.target.name]: e.target.value,
    });
  };

  // shipping info
  const [shippingInfo, setShippingInfo] = useState({
    shipping: "standard-shipping",
    price: 0,
  });
  const handleShippingChange = (e) => {
    setShippingInfo({
      shipping: e.target.value,
      price: parseInt(e.target.dataset.price),
    });
  };

  // payment info
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    cardNumber: "",
    expireAt: "",
    "cvc-ccv": "",
  });

  const handlePaymentChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div className="container py-24 px-5 sm:mx-auto sm:grid sm:grid-cols-12 sm:py-24 sm:px-0">
        <OrderContext.Provider
          value={{
            addressInfo,
            shippingInfo,
            paymentInfo,
            handleAddressChange,
            handleShippingChange,
            handlePaymentChange,
          }}
        >
          <CartContext.Provider
            value={{ currentCartItems, handleQuantityClick }}
          >
            <OrderInfo orderStep={orderStep} />
            <Cart />
            <ProgressControl
              orderStep={orderStep}
              onStepButtonClick={handleStepButtonClick}
            />
          </CartContext.Provider>
        </OrderContext.Provider>
      </div>
    </main>
  );
}
