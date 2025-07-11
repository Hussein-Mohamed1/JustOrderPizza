"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-48 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-sky-400 focus:outline-none"
      />
    </form>
  );
}

export default SearchOrder;
