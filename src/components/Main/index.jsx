import OrderInfo from "./OrderInfo";
import Cart from "./Cart";
import ProgressControl from "./ProgressControl";

export default function Main() {
  return (
    <main>
      <div className="container my-10 px-5 sm:mx-auto sm:my-16 sm:grid sm:grid-cols-12 sm:px-0">
        <OrderInfo />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}
