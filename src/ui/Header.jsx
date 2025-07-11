import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "./UserName";

function Header() {
  return (
    <header className="border-b-4 border-sky-500 bg-slate-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link
            to="/"
            className="flex items-center space-x-1 text-lg font-bold tracking-wide text-sky-400 transition-colors duration-200 hover:text-sky-300 sm:space-x-2 sm:text-2xl"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3595/3595458.png"
              alt="Pizza Logo"
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
            <span className="xs:inline hidden sm:inline">justorderpizza</span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden sm:block">
              <SearchOrder />
            </div>
            <UserName />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
