import { FaMinus, FaPlus } from "react-icons/fa";
import { cartItems } from "constants";
import { useState } from "react";

export default function Cart() {
  const [renderedCartItems, setRenderedCartItems] = useState([...cartItems]);
  let totalPrice = renderedCartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);

  const handleIncreaseClick = (id) => {
    const updatedCartItems = renderedCartItems.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.quantity += 1;
        return cartItem;
      }
      return cartItem;
    });
    setRenderedCartItems(updatedCartItems);
  };

  const handleDecreaseClick = (id) => {
    const updatedCartItems = renderedCartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.quantity -= 1;
          return cartItem;
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity > 0);
    setRenderedCartItems(updatedCartItems);
  };

  return (
    <section className="flex flex-col justify-end sm:col-span-4 sm:col-start-8 sm:row-span-2">
      <div className="flex h-fit flex-col gap-5 rounded border p-5 dark:bg-neutral-800 sm:p-8">
        <h3 className="text-lg font-bold">購物籃</h3>

        <section className="my-4 space-y-10">
          {renderedCartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              product={cartItem}
              handleIncreaseClick={handleIncreaseClick}
              handleDecreaseClick={handleDecreaseClick}
            />
          ))}
          {renderedCartItems.length === 0 && (
            <h2>｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡ 您的購物車中沒有商品</h2>
          )}
        </section>

        <section className="flex justify-between border-t py-3">
          <div>運費</div>
          {/* will have to be dynamic */}
          <div className="font-bold">免費</div>
        </section>

        <section className="flex justify-between border-t py-3">
          <div>小計</div>
          <div className="font-bold">{`$ ${totalPrice.toLocaleString()}`}</div>
        </section>
      </div>
    </section>
  );
}

function CartItem({ product, handleIncreaseClick, handleDecreaseClick }) {
  return (
    <div className="flex justify-between sm:grid sm:grid-cols-[100px_1fr]">
      <img src={product.img} className="h-[100px]" alt={product.name} />

      <div className="flex flex-col items-end justify-between sm:ml-5 sm:grid sm:grid-cols-[1fr_auto] sm:items-start">
        <div>{product.name}</div>
        <div className="sm:col-start-1">
          <div className="flex w-fit items-center gap-5 sm:-mt-5">
            <FaMinus
              className="cursor-pointer rounded-full bg-gray-200 p-1.5 text-2xl hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              onClick={() => handleDecreaseClick(product.id)}
            />
            <span>{product.quantity}</span>
            <FaPlus
              className="cursor-pointer rounded-full bg-gray-200 p-1.5 text-2xl hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              onClick={() => handleIncreaseClick(product.id)}
            />
          </div>
        </div>
        <div className="justify-self-end font-bold sm:col-start-2 sm:row-start-1">{`$ ${(
          product.price * product.quantity
        ).toLocaleString()}`}</div>
      </div>
    </div>
  );
}
