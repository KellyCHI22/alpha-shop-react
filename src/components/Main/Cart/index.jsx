import { FaMinus, FaPlus } from "react-icons/fa";
import { cartItems } from "../../../constants";

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

function CartItem({ product }) {
  return (
    <>
      <div className="grid grid-cols-[100px_2fr_1fr]">
        <img src={product.image} className="h-[100px]" />
        <div className="ml-5">
          <div className="mb-3">{product.name}</div>
          <div>
            <div className="flex items-center gap-5">
              <FaMinus className="rounded-full bg-gray-200 p-1.5 text-2xl" />
              <span>{product.count}</span>
              <FaPlus className="rounded-full bg-gray-200 p-1.5 text-2xl" />
            </div>
          </div>
        </div>
        <div className="justify-self-end font-bold">{`$ ${(
          product.price * product.count
        ).toLocaleString()}`}</div>
      </div>
    </>
  );
}
