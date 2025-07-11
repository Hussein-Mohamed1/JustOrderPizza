import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "./UserName";

function Header() {
  return (
    <header className="border-b-4 border-sky-500 bg-slate-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-sky-400 transition-colors duration-200 hover:text-sky-300"
          >
            🍕 JustOrderPizza
          </Link>

          <div className="flex items-center space-x-6">
            <SearchOrder />
            <UserName />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
