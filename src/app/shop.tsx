"use client";

import React, { useContext } from "react";
import { CartContext } from "./context";

const Shop = () => {
  const obj = useContext(CartContext);
  console.log("Adeel : ", obj);
  const arr = [
    { name: "Tops", id: 1 },
    { name: "Pant", id: 2 },
    { name: "Shirt", id: 3 },
    { name: "jacket", id: 4 },
    { name: "Sweater", id: 5 },
  ];
  return (
    <div className="text-center">
      <h1 className="text-2xl text-gray-700 m-6">Shopping</h1>
      <ol>
        {arr.map((val, index) => {
          return (
            <li className="py-4 text-lg" key={index}>
              <span className="m-3">{val.id}</span>
              {val.name}
              <span onClick={()=>obj.add({name:val.name,id:val.id})} className="cursor-pointer border-4 bg-black text-white rounded-lg px-1 py-3 m-6">
                Add To Cart
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Shop;
