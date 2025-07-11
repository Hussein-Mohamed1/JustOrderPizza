import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const isLoading = useNavigation().state === "loading";
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {isLoading && <Loader />}
      <Header />
      <main className="flex-1 pb-18">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
