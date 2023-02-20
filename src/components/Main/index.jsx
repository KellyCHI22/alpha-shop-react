import OrderInfo from "./OrderInfo";
import Cart from "./Cart";
import ProgressControl from "./ProgressControl";
import { useState } from "react";

export default function Main() {
  const [orderStep, setOrderStep] = useState("address");
  const handleStepButtonClick = (step) => {
    setOrderStep(step);
  };

  return (
    <main>
      <div className="container py-24 px-5 sm:mx-auto sm:grid sm:grid-cols-12 sm:py-24 sm:px-0">
        <OrderInfo orderStep={orderStep} />
        <Cart />
        <ProgressControl
          orderStep={orderStep}
          onStepButtonClick={handleStepButtonClick}
        />
      </div>
    </main>
  );
}
