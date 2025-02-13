import Link from "next/link";
import LoginForm from "@/components/pages/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black">
      <h1 className="text-3xl font-bold mb-8 text-white">Login</h1>
      <LoginForm />
      <p className="mt-4 text-white">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
