import React from "react";

interface LoaderProps {
  className?: string;
}

// Usually i would use CN for the className here but since i dont have very clear instructions on what is allowed and what is not im trying to not use any library except for axios
// I would also use an icon library and use the provided spinner that comes with it

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <svg
      className={`animate-spin h-5 w-5 mr-3 text-black ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
          <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"></path>{" "}
        </g>
      </g>
    </svg>
  );
};

export default Loader;
