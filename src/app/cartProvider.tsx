"use client";
import React, { useState } from "react";
import { CartContext } from "./context";

interface Obj {
  id: number;
  name: string;
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Obj[]>([]);
  // add to cart and delete to cart function
  const add = (obj: Obj) => setCart([...cart, obj]);
  const del = (id: number) => {
    const newCart = cart.filter((val) => val.id !== id);
    return setCart([...newCart]);
  };
  return (
    <div>
      {/* CartContext.Provider k value mai jo jo hm dalen gy wo console mai nzr ae ga. jse phle cart dala
        to cart nzr arha tha phr add ka function dala to add ka function b nzr ane lg gya or phr del ka func
        dala. as ko phr apply krna j jha ap ko zrort h */}
      <CartContext.Provider value={{ cart, add, del }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
