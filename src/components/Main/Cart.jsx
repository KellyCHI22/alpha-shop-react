import { FaMinus, FaPlus } from "react-icons/fa";
import { cartItems, dummyItems } from "constants";

export default function Cart() {
  return (
    <section className="flex flex-col justify-end  sm:col-span-4 sm:col-start-8 sm:row-span-2">
      <div className="flex h-fit flex-col gap-5 rounded border p-5 dark:bg-neutral-800 sm:p-8">
        <h3 className="text-lg font-bold">購物籃</h3>

        <section className="my-4 space-y-10">
          {dummyItems.map((cartItem) => (
            <CartItem key={cartItem.name} product={cartItem} />
          ))}
        </section>

        <section className="flex justify-between border-t py-3">
          <div>運費</div>
          {/* will have to be dynamic */}
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
      <div className="flex justify-between sm:grid sm:grid-cols-[100px_1fr]">
        <img src={product.img} className="h-[100px]" alt={product.name} />

        <div className="flex flex-col items-end justify-between sm:ml-5 sm:grid sm:grid-cols-[1fr_auto] sm:items-start">
          <div>{product.name}</div>
          <div className="sm:col-start-1">
            <div className="flex w-fit items-center gap-5 sm:-mt-5">
              <FaMinus className="cursor-pointer rounded-full bg-gray-200 p-1.5 text-2xl hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600" />
              <span>{product.quantity}</span>
              <FaPlus className="cursor-pointer rounded-full bg-gray-200 p-1.5 text-2xl hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600" />
            </div>
          </div>
          <div className="justify-self-end font-bold sm:col-start-2 sm:row-start-1">{`$ ${(
            product.price * product.quantity
          ).toLocaleString()}`}</div>
        </div>
      </div>
    </>
  );
}
