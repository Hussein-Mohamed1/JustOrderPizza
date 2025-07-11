import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getCartTotalQuantity);
  const totalPrice = useSelector(getCartTotalPrice);
  if (totalQuantity === 0) return null;
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t-4 border-sky-500 bg-slate-800 px-2 py-2 text-white shadow-lg sm:px-4 sm:py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row sm:gap-0">
        <div className="flex items-center space-x-3 sm:space-x-6">
          <span className="text-sm font-semibold sm:text-base">
            {totalQuantity} pizzas
          </span>
          <span className="text-lg font-bold text-sky-400 sm:text-2xl">
            {formatCurrency(totalPrice)}
          </span>
        </div>
        <Link
          to="/cart"
          className="w-full transform rounded-lg bg-sky-500 px-4 py-2 text-center text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg sm:w-auto sm:px-6 sm:text-base"
        >
          Open cart →
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
