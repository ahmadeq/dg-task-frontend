import type React from "react";
import Loader from "./Loader";

interface ButtonProps {
  onClick: () => void;
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  onClick,
  loading,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        w-full px-4 py-2 text-white font-semibold rounded-md
        transition-colors duration-200 ease-in-out
        ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-black hover:bg-black/90 "
        }
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
