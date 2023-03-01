import Input from "./Input";
import Select from "./Select";
import { genders, cities } from "constants";
import { useContext } from "react";
import { OrderContext } from "context/OrderContext";

export default function OrderAddress() {
  const { orderStep, orderInfo, handleOrderInfoChange } =
    useContext(OrderContext);

  return (
    <form className="mb-10 sm:mb-0 sm:h-96">
      <h3 className="mb-5 text-xl font-bold">寄送地址</h3>

      <section className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5">
          <Select
            className="col-span-1"
            label="稱謂"
            name="gender"
            options={genders}
            onChange={(e) => handleOrderInfoChange(e, orderStep)}
          />
          <Input
            className="col-span-2"
            label="姓名"
            type="text"
            name="name"
            value={orderInfo.address.name}
            placeholder="請輸入姓名"
            onChange={(e) => handleOrderInfoChange(e, orderStep)}
          />
        </div>

        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2">
          <Input
            label="電話"
            type="tel"
            name="tel"
            value={orderInfo.address.tel}
            placeholder="請輸入行動電話"
            onChange={(e) => handleOrderInfoChange(e, orderStep)}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={orderInfo.address.email}
            placeholder="請輸入電子郵件"
            onChange={(e) => handleOrderInfoChange(e, orderStep)}
          />
        </div>

        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3">
          <Select
            label="縣市"
            name="city"
            options={cities}
            onChange={(e) => handleOrderInfoChange(e, orderStep)}
          />
          <Input
            className="col-span-2"
            label="地址"
            type="text"
            name="address"
            value={orderInfo.address.address}
            placeholder="請輸入地址"
            onChange={(e) => handleOrderInfoChange(e, orderStep)}
          />
        </div>
      </section>
    </form>
  );
}
