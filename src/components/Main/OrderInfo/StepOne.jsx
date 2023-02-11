import { genders, cities } from "../../../constants";
import Input from "./Input";
import Select from "./Select";

export default function StepOne() {
  return (
    <form className="mt-10 mb-40">
      <h3 className="mb-5 text-xl font-bold">寄送地址</h3>

      <section className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5">
          <Select
            className="col-span-1"
            label="稱謂"
            value="gender"
            options={genders}
          />
          <Input
            className="col-span-2"
            label="姓名"
            type="text"
            placeholder="請輸入姓名"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Input label="電話" type="tel" placeholder="請輸入行動電話" />
          <Input label="Email" type="email" placeholder="請輸入電子郵件" />
        </div>

        <div className="grid grid-cols-3 gap-5">
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
