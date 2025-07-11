"use client";

import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 text-6xl">😢</div>
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Something went wrong
          </h1>
          <p className="mb-8 text-gray-600">{error.data || error.message}</p>
          <button
            onClick={() => navigate(-1)}
            className="transform rounded-lg bg-sky-500 px-6 py-3 font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-sky-600 hover:shadow-lg"
          >
            ← Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
