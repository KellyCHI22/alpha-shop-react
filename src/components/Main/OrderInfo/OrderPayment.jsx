import { useState } from "react";
import Input from "./Input";

export default function OrderPayment() {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    cardNumber: "",
    expireAt: "",
    "cvc-ccv": "",
  });

  const handleChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
    console.log(paymentInfo);
  };

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
          onChange={handleChange}
        />
        <Input
          className="sm:w-2/3"
          label="卡號"
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          placeholder="1111 2222 3333 4444"
          onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="有效期限"
            type="text"
            name="expireAt"
            value={paymentInfo.expireAt}
            placeholder="MM/YY"
            onChange={handleChange}
          />
          <Input
            label="CVC / CCV"
            type="text"
            name="cvc-ccv"
            value={paymentInfo["cvc-ccv"]}
            placeholder="123"
            onChange={handleChange}
          />
        </div>
      </section>
    </form>
  );
}
