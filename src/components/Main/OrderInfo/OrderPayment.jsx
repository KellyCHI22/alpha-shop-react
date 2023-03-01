import { OrderContext } from "context/OrderContext";
import { useContext, useState } from "react";
import Input from "./Input";

export default function OrderPayment() {
  const { paymentInfo, handlePaymentChange } = useContext(OrderContext);

  return (
    <form className="mb-10 sm:mb-0 sm:h-96">
      <h3 className="mb-5 text-xl font-bold">付款資訊</h3>
      <section className="flex flex-col gap-5">
        <Input
          className="sm:w-2/3"
          label="持卡人姓名"
          type="text"
          name="name"
          value={paymentInfo.name}
          placeholder="請輸入姓名"
          onChange={handlePaymentChange}
        />
        <Input
          className="sm:w-2/3"
          label="卡號"
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          placeholder="1111 2222 3333 4444"
          onChange={handlePaymentChange}
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="有效期限"
            type="text"
            name="expireAt"
            value={paymentInfo.expireAt}
            placeholder="MM/YY"
            onChange={handlePaymentChange}
          />
          <Input
            label="CVC / CCV"
            type="text"
            name="cvc-ccv"
            value={paymentInfo["cvc-ccv"]}
            placeholder="123"
            onChange={handlePaymentChange}
          />
        </div>
      </section>
    </form>
  );
}
