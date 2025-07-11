"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() === "") return;
    dispatch(UpdateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="mb-4 text-lg font-medium text-white">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border-2 border-transparent bg-white/90 px-4 py-3 text-center font-medium text-gray-800 placeholder-gray-500 transition-all duration-200 focus:border-white focus:ring-2 focus:ring-white focus:outline-none"
        />
      </div>

      {username !== "" && (
        <div className="animate-fade-in">
          <button className="w-full transform rounded-lg bg-sky-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-sky-700 hover:shadow-xl">
            Start ordering 🚀
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
