import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-400 via-sky-500 to-sky-700 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl">
            The best pizza.
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-sky-100 md:text-2xl">
            Straight out of the oven, straight to you.
          </p>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-white"></div>
        </div>

        {userName ? (
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-blue-50 hover:shadow-lg active:scale-95"
          >
            Continue ordering, {userName}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
            <CreateUser />
          </div>
        )}

        <div className="mt-8 text-sm text-sky-100">
          <p>🚀 Fast delivery • 🍕 Fresh ingredients • ⭐ 5-star rated</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
