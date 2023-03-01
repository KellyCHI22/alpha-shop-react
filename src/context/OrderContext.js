import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  // orderStep
  const [orderStep, setOrderStep] = useState("address");
  const handleStepButtonClick = (step) => {
    setOrderStep(step);
  };

  // orderInfo
  const [orderInfo, setOrderInfo] = useState({
    address: {
      gender: "mr",
      name: "",
      tel: "",
      email: "",
      city: "",
      address: "",
    },
    shipping: {
      shipping: "standard-shipping",
      price: 0,
    },
    payment: {
      name: "",
      cardNumber: "",
      expireAt: "",
      "cvc-ccv": "",
    },
  });

  const handleOrderInfoChange = (e, orderStep) => {
    // 因為 shipping 有多一個 price 屬性要更新所以特別抓出來
    if (orderStep === "shipping") {
      setOrderInfo({
        ...orderInfo,
        [orderStep]: {
          [e.target.name]: e.target.value,
          price: parseInt(e.target.dataset.price),
        },
      });
    } else {
      setOrderInfo({
        ...orderInfo,
        [orderStep]: {
          ...orderInfo[orderStep],
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orderStep,
        orderInfo,
        handleOrderInfoChange,
        handleStepButtonClick,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
