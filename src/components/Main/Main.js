import Step from './Step/Step';
import Cart from './Cart/Cart';

export default function Main() {
  return (
    <main>
      <div className="container mx-auto my-10 grid grid-cols-12">
        <Step />
        <Cart />
      </div>
    </main>
  );
}