import { useState } from "react";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";

export default function Login() {
  const [signingUp, setSigningUp] = useState(false);

  return (
    <div className="f-center h-[100vh] w-full bg-[url('/src/assets/books_bg.jpeg')] pt-[2rem]">
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
      <div className="relative flex w-[35%] flex-col rounded bg-gray-200 px-6 py-7 pt-5 text-black">
        <h1 className="mb-1 text-3xl font-semibold">
          {signingUp ? "¿Eres nuevo por aquí?" : "¡Bienvenido!"}
        </h1>
        {signingUp ? (
          <SignUp openLogInForm={() => setSigningUp(false)} />
        ) : (
          <LogIn openSignUpForm={() => setSigningUp(true)} />
        )}
      </div>
    </div>
  );
}
