"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }

    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }

    const numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
      alert("Password must contain at least one number.");
      return;
    }

    const specialCharRegex = /\W/;
    if (!specialCharRegex.test(password)) {
      alert("Password must contain at least one non-alphanumeric character.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    console.log("Login attempt with:", { email, password });
    try {
      const res = await axios.post("http://localhost:5240/register", {
        email,
        password,
      });
      alert("Account created successfully, login using your new account");
      Cookies.remove("tokenType");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      router.push("/login");
    } catch (error: any) {
      // Our form would usually have zod validation and it would be react hook form, as well as toast message for backend validation and for apis error handling
      const errorMessage =
        error.response?.data?.errors?.DuplicateUserName?.[0] ||
        "An error occurred during registration.";
      alert(errorMessage);
      console.log("Error logging in:", error.response.data.errors);
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
      <div className="mb-4">
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
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-white mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Sign Up
      </button>
    </form>
  );
}
