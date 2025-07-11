"use client";

import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import {
  addToCart,
  getCartItemQuantity,
  removeFromCart,
} from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCartItemQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addToCart(newItem));
  }
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${soldOut ? "opacity-75" : ""}`}
    >
      <div className="relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="h-48 w-full object-cover"
        />
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-red-500 px-4 py-2 font-bold text-white">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {ingredients.join(", ")}
        </p>

        <div className="flex items-center justify-between">
          <div>
            {!soldOut ? (
              <p className="text-2xl font-bold text-sky-600">
                {formatCurrency(unitPrice)}
              </p>
            ) : null}
          </div>

          {isInCart && (
            <div className="flex flex-col items-end space-y-3">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <button
                className="transform rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-red-600 hover:shadow-lg"
                onClick={() => dispatch(removeFromCart(id))}
              >
                Delete from cart
              </button>
            </div>
          )}
          {!soldOut && !isInCart && (
            <button
              className={
                "transform rounded-full bg-sky-500 px-6 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg"
              }
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
