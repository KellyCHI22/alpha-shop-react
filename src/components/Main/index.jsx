import OrderInfo from "./OrderInfo";
import Cart from "./Cart";
import ProgressControl from "./ProgressControl";
import { CartProvider } from "context/CartContext";
import { OrderProvider } from "context/OrderContext";

export default function Main() {
  return (
    <main>
      <div className="container py-24 px-5 sm:mx-auto sm:grid sm:grid-cols-12 sm:py-24 sm:px-0">
        <OrderProvider>
          <CartProvider>
            <OrderInfo />
            <Cart />
            <ProgressControl />
          </CartProvider>
        </OrderProvider>
      </div>
    </main>
  );
}
