"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

// Our form would usually have zod validation and react hook form and they will handle validation for the form fields, as well as toast message for backend validation and for apis error handling

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5240/login", {
        email,
        password,
      });
      const { tokenType, accessToken, refreshToken } = res.data;
      Cookies.set("tokenType", tokenType);
      Cookies.set("accessToken", accessToken, { expires: 1 / 24 });
      Cookies.set("refreshToken", refreshToken);

      router.push("/products");
    } catch (error: any) {
      console.log("Error logging in:", error);
      if (error?.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("An error occurred while logging in");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Log In
      </button>
    </form>
  );
}
