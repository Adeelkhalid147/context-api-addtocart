import Image from "next/image";
import Shop from "./shop";
import Cart from "./cart";
import CartProvider from "./cartProvider";

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-zinc-500 font-bold text-center">
          Context Api Cart Funcnality
        </h2>
      </div>
      {/* 2jgha pe context ko use krna h as liye Shop or Cart ko wrape kr dia */}
      <CartProvider>
        {/*main div */}
        <div className="flex gap-5">
          {/* left side */}
          <div className="border-4">
            <Shop />
          </div>
          {/* right side */}
          <div className="border-4">
            <Cart />
          </div>
        </div>
      </CartProvider>
    </div>
  );
}
