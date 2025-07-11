"use client";

import { useDispatch } from "react-redux";
import { decreasingItemQuantity, increasingItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="mr-2 flex items-center space-x-3">
      <button
        onClick={() => dispatch(decreasingItemQuantity(pizzaId))}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 font-bold text-white transition-all duration-200 hover:scale-110 hover:bg-sky-600 active:scale-95"
      >
        -
      </button>
      <span className="min-w-[2rem] text-center font-bold text-gray-800">
        {currentQuantity}
      </span>
      <button
        onClick={() => dispatch(increasingItemQuantity(pizzaId))}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 font-bold text-white transition-all duration-200 hover:scale-110 hover:bg-sky-600 active:scale-95"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
