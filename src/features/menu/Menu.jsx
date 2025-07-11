import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Our Menu</h1>
        <p className="text-lg text-gray-600">
          Delicious pizzas made with love and fresh ingredients
        </p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-sky-500"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
