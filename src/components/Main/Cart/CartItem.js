import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartItem({ product }) {
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
