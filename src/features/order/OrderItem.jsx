import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center space-x-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
          {quantity}
        </div>
        <p className="font-medium text-gray-800">
          {quantity}× {name}
        </p>
      </div>
      <p className="text-lg font-bold text-sky-600">
        {formatCurrency(totalPrice)}
      </p>
    </div>
  );
}

export default OrderItem;
