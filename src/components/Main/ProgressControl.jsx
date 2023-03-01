import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";
import Button from "./OrderInfo/Button";
import { useContext } from "react";
import { CartContext } from "context/CartContext";
import { OrderContext } from "context/OrderContext";

export default function ProgressControl() {
  const { currentCartItems } = useContext(CartContext);
  const { orderStep, orderInfo, handleStepButtonClick } =
    useContext(OrderContext);

  const totalPrice = currentCartItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, orderInfo.shipping.price);

  const handleOrderSubmit = () => {
    console.log(currentCartItems, orderInfo, `totalPrice: ${totalPrice} 元`);
  };

  let stepButtons;
  const prevButtonStyles = "w-auto hover:text-neutral-700";
  const nextButtonStyles = "bg-rose-400 px-8 text-white hover:bg-rose-300";
  // address 步驟按鈕
  if (orderStep === "address") {
    stepButtons = (
      <Button
        className={`w-full sm:w-40 ${nextButtonStyles}`}
        onClick={() => handleStepButtonClick("shipping")}
      >
        下一步
        <RightArrow />
      </Button>
    );
  }
  // shipping 步驟按鈕
  else if (orderStep === "shipping") {
    stepButtons = (
      <>
        <Button
          className={prevButtonStyles}
          onClick={() => handleStepButtonClick("address")}
        >
          <LeftArrow />
          上一步
        </Button>
        <Button
          className={`w-40 ${nextButtonStyles}`}
          onClick={() => handleStepButtonClick("payment")}
        >
          下一步
          <RightArrow />
        </Button>
      </>
    );
  }
  // payment 步驟按鈕
  else if (orderStep === "payment") {
    stepButtons = (
      <>
        <Button
          className={prevButtonStyles}
          onClick={() => handleStepButtonClick("shipping")}
        >
          <LeftArrow />
          上一步
        </Button>
        <Button
          className={`w-40 ${nextButtonStyles}`}
          onClick={handleOrderSubmit}
        >
          確認下單
        </Button>
      </>
    );
  }

  return (
    <section className="mt-5 flex justify-end border-t pt-5 sm:col-span-5 sm:col-start-2 sm:row-start-2 sm:mt-0">
      <section
        className={`flex w-full ${
          orderStep === "address" ? " sm:justify-end" : "justify-between"
        }`}
      >
        {stepButtons}
      </section>
    </section>
  );
}
