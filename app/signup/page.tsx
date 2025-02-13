import Link from "next/link";
import SignupForm from "@/components/pages/signup/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black">
      <h1 className="text-3xl font-bold mb-8 text-white">Sign Up</h1>
      <SignupForm />
      <p className="mt-4 text-white">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-400 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
