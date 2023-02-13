import { genders, cities } from "constants"; // 原本用相對路徑：../../../constants
import Input from "./Input";
import Select from "./Select";

export default function OrderAddress() {
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
          />
          <Input
            className="col-span-2"
            label="姓名"
            type="text"
            placeholder="請輸入姓名"
          />
        </div>

        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2">
          <Input label="電話" type="tel" placeholder="請輸入行動電話" />
          <Input label="Email" type="email" placeholder="請輸入電子郵件" />
        </div>

        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3">
          <Select label="縣市" value="city" options={cities} />
          <Input
            className="col-span-2"
            label="地址"
            type="text"
            placeholder="請輸入地址"
          />
        </div>
      </section>
    </form>
  );
}
