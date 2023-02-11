import OrderInfo from "./OrderInfo";
import Cart from "./Cart";

export default function Main() {
  return (
    <main>
      <div className="container mx-auto my-16 grid grid-cols-12">
        <OrderInfo />
        <Cart />
      </div>
    </main>
  );
}
