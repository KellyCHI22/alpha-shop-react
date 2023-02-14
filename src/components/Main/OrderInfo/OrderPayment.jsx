import Input from "./Input";

export default function OrderPayment() {
  return (
    <>
      <form className="mb-10 sm:mb-0 sm:h-96">
        <h3 className="mb-5 text-xl font-bold">付款資訊</h3>
        <section className="flex flex-col gap-5">
          <Input
            className="sm:w-2/3"
            label="持卡人姓名"
            type="text"
            placeholder="請輸入姓名"
          />
          <Input
            className="sm:w-2/3"
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
          />

          <div className="grid grid-cols-2 gap-5">
            <Input label="有效期限" type="text" placeholder="MM/YY" />
            <Input label="CVC / CCV" type="text" placeholder="123" />
          </div>
        </section>
      </form>
    </>
  );
}