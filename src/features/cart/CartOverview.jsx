import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getCartTotalQuantity);
  const totalPrice = useSelector(getCartTotalPrice);
  if (totalQuantity === 0) return null;
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t-4 border-sky-500 bg-slate-800 px-4 py-4 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="font-semibold">{totalQuantity} pizzas</span>
          <span className="text-2xl font-bold text-sky-400">
            {formatCurrency(totalPrice)}
          </span>
        </div>
        <Link
          to="/cart"
          className="transform rounded-lg bg-sky-500 px-6 py-2 font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg"
        >
          Open cart →
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
