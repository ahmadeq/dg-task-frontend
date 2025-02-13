import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl md:text-3xl px-4 text-center">
      <h1>
        Please read the documentation provided in the email before proceeding
        with this app.
      </h1>
      <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Link href="/products">
          <p className="text-black bg-white border-2 border-black px-6 py-3 rounded-none text-lg md:text-xl min-w-[300px] hover:bg-black hover:text-white transition duration-300">
            Go To Products
          </p>
        </Link>
        <Link href="/login">
          <p className="text-black bg-white border-2 border-black px-6 py-3 rounded-none text-lg md:text-xl min-w-[300px] hover:bg-black hover:text-white transition duration-300">
            Go To Login
          </p>
        </Link>
      </div>
    </div>
  );
}
