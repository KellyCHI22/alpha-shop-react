import { genders, cities } from "constants";
import { OrderContext } from "context/OrderContext";
import { useContext, useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function OrderAddress() {
  const { addressInfo, handleAddressChange } = useContext(OrderContext);

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
            onChange={handleAddressChange}
          />
          <Input
            className="col-span-2"
            label="姓名"
            type="text"
            name="name"
            value={addressInfo.name}
            placeholder="請輸入姓名"
            onChange={handleAddressChange}
          />
        </div>

        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2">
          <Input
            label="電話"
            type="tel"
            name="tel"
            value={addressInfo.tel}
            placeholder="請輸入行動電話"
            onChange={handleAddressChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={addressInfo.email}
            placeholder="請輸入電子郵件"
            onChange={handleAddressChange}
          />
        </div>

        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3">
          <Select
            label="縣市"
            name="city"
            options={cities}
            onChange={handleAddressChange}
          />
          <Input
            className="col-span-2"
            label="地址"
            type="text"
            name="address"
            value={addressInfo.address}
            placeholder="請輸入地址"
            onChange={handleAddressChange}
          />
        </div>
      </section>
    </form>
  );
}
