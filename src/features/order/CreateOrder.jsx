import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getCartTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const formErrors = useActionData();
  const isSubmitting = useNavigation().state === "submitting";
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const totalCartPrice = useSelector(getCartTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Ready to order? Let's go!
        </h2>

        <button onClick={() => dispatch(fetchAddress())}>getAdress</button>
        <Form method="POST" className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="customer"
              defaultValue={userName}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded bg-red-50 p-2 text-sm text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="grow">
              <input
                type="text"
                name="address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                disabled={isLoadingAddress}
                defaultValue={address}
                required
              />
              {addressStatus === "error" && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {errorAddress}
                </p>
              )}
            </div>

            {!position.latitude && !position.longitude && (
              <span className="absolute top-9 right-[3px] z-50 md:top-9 md:right-[5px]">
                <button
                  className="rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg"
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  {isLoadingAddress ? "Loading Address..." : "Get position"}
                </button>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3 rounded-lg bg-sky-50 p-4">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-sky-600 focus:ring-sky-500"
            />
            <label
              htmlFor="priority"
              className="text-sm font-medium text-gray-700"
            >
              Want to give your order priority? (+20% of cart total)
            </label>
          </div>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <button
            disabled={isSubmitting || isLoadingAddress}
            className={`w-full transform rounded-lg px-6 py-4 font-bold shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-400"
                : "bg-sky-500 text-white hover:bg-sky-600"
            }`}
          >
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)} 🍕`}
          </button>
        </Form>
      </div>
    </div>
  );
}

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please enter a valid phone number";
  if (Object.keys(errors).length) return errors;
  const { id } = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${id}`);
}

export default CreateOrder;
