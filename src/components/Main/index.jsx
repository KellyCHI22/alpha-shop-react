import OrderInfo from "./OrderInfo";
import Cart from "./Cart";
import ProgressControl from "./ProgressControl";

export default function Main() {
  return (
    <main>
      <div className="container py-24 px-5 sm:mx-auto sm:grid sm:grid-cols-12 sm:py-24 sm:px-0">
        <OrderInfo />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}
