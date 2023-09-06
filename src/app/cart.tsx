"use client";
import React, { useContext } from "react";
import { CartContext } from "./context";

const Cart = () => {
  const obj = useContext(CartContext);
  return (
    <div className="text-center">
      <h1 className="text-2xl text-gray-700 m-6">Cart</h1>
      <ol>
        {obj.cart[0] &&
          obj.cart.map((val: any, index: any) => {
            return (
              <li className="py-4 text-lg" key={index}>
                <span className="m-3">{val.id}</span>
                {val.name}
                <span
                  onClick={() => obj.del(val.id)}
                  className="cursor-pointer border-4 bg-black text-white rounded-lg px-1 py-3 m-6"
                >
                  Delete To Cart
                </span>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Cart;
