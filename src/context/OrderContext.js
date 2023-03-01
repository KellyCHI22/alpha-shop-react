import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  // order step
  const [orderStep, setOrderStep] = useState("address");
  const handleStepButtonClick = (step) => {
    setOrderStep(step);
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
    <OrderContext.Provider
      value={{
        orderStep,
        addressInfo,
        shippingInfo,
        paymentInfo,
        handleStepButtonClick,
        handleAddressChange,
        handleShippingChange,
        handlePaymentChange,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
