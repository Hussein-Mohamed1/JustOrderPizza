import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <Link
          to="/menu"
          className="inline-flex items-center font-medium text-sky-600 transition-colors duration-200 hover:text-sky-700"
        >
          ← Back to menu
        </Link>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">
          Your cart, {userName || "Guest"}!
        </h2>

        <div className="mb-8 space-y-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <Link
            to="/order/new"
            className="flex-1 transform rounded-lg bg-sky-500 px-6 py-3 text-center font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg"
          >
            Order pizzas 🍕
          </Link>
          <button
            onClick={() => dispatch(clearCart())}
            className="flex-1 transform rounded-lg bg-red-500 px-6 py-3 font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-red-600 hover:shadow-lg"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
