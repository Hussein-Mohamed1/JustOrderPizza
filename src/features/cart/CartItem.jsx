import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { removeFromCart } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  return (
    <div className="sm-justify-center flex flex-wrap items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100">
      <div className="flex items-center space-x-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
          {quantity}
        </div>
        <p className="font-medium text-gray-800">
          {quantity}× {name}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <p className="text-lg font-bold text-sky-600">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity} />
        <button
          onClick={() => dispatch(removeFromCart(pizzaId))}
          className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
