// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Order #{id}</h2>
            <div className="flex items-center space-x-3">
              {priority && (
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-yellow-900">
                  Priority
                </span>
              )}
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold capitalize">
                {status} order
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="border-b bg-sky-50 p-6">
          <div className="text-center">
            <p className="mb-2 text-lg font-semibold text-gray-800">
              {deliveryIn >= 0
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                : "Order should have arrived"}
            </p>
            <p className="text-gray-600">
              Estimated delivery: {formatDate(estimatedDelivery)}
            </p>
          </div>
        </div>

        {/* Order Items */}
        <div className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Your order:
          </h3>
          <div className="space-y-3">
            {cart.map((item) => (
              <OrderItem item={item} key={item.pizzaId} />
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t bg-gray-50 p-6">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Pizza price:</span>
              <span className="font-semibold">
                {formatCurrency(orderPrice)}
              </span>
            </div>
            {priority && (
              <div className="flex justify-between text-gray-700">
                <span>Priority price:</span>
                <span className="font-semibold">
                  {formatCurrency(priorityPrice)}
                </span>
              </div>
            )}
            <div className="flex justify-between border-t pt-2 text-lg font-bold text-gray-800">
              <span>Total to pay:</span>
              <span className="text-sky-600">
                {formatCurrency(orderPrice + priorityPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
