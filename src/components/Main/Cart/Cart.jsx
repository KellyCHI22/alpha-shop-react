import CartItem from "./CartItem";
import { cartItems } from "../../../constants/constants";

export default function Cart() {
  return (
    <section className="col-span-4 col-start-8 flex flex-col justify-end">
      <div className="flex h-fit flex-col gap-5 rounded border p-8">
        <h3 className="text-lg font-bold">購物籃</h3>

        <section className="my-4 space-y-10">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.name} product={cartItem} />
          ))}
        </section>

        <section className="flex justify-between border-t py-3">
          <div>運費</div>
          <div className="font-bold">免費</div>
        </section>

        <section className="flex justify-between border-t py-3">
          <div>小計</div>
          {/* total will have to be dynamic */}
          <div className="font-bold">$ 5,298</div>
        </section>
      </div>
    </section>
  );
}
