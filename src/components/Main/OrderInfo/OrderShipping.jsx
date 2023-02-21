import Radio from "./Radio";

export default function OrderShipping() {
  return (
    <form className="mb-10 sm:mb-0 sm:h-96">
      <h3 className="mb-5 text-xl font-bold">運送方式</h3>

      <section className="space-y-5">
        <Radio
          id="standard-shipping"
          name="shipping"
          label="標準運送"
          price="0"
          description="約 3~7 個工作天"
        />

        <Radio
          id="DHL-shipping"
          name="shipping"
          label="DHL 貨運"
          price="500"
          description="48 小時內送達"
        />
      </section>
    </form>
  );
}
