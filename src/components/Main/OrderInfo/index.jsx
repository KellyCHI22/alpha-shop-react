import OrderProgress from "./OrderProgress";
import OrderAddress from "./OrderAddress";
import OrderShipping from "./OrderShipping";
import OrderPayment from "./OrderPayment";

export default function OrderInfo({ orderStep }) {
  let renderedStep;
  if (orderStep === "address") {
    renderedStep = <OrderAddress />;
  } else if (orderStep === "shipping") {
    renderedStep = <OrderShipping />;
  } else {
    renderedStep = <OrderPayment />;
  }

  return (
    <div className="flex flex-col justify-end sm:col-span-5 sm:col-start-2 sm:row-start-1">
      <h2 className="text-3xl font-bold">結帳</h2>
      <OrderProgress orderStep={orderStep} />
      {renderedStep}
    </div>
  );
}
