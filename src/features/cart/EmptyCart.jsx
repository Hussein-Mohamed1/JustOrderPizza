import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="rounded-2xl bg-white p-12 shadow-lg">
        <div className="mb-8">
          <div className="mb-4 text-6xl">🛒</div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>
          <p className="mb-8 text-gray-600">
            Your cart is still empty. Start adding some pizzas :)
          </p>
        </div>

        <Link
          to="/menu"
          className="inline-flex transform items-center rounded-lg bg-sky-500 px-8 py-3 font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg"
        >
          ← Back to menu
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
