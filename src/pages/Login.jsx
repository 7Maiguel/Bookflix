import LogIn from "../components/auth/LogIn";

export default function Login() {
  return (
    <div className="f-center h-[100vh] w-full bg-[url('/src/assets/books_bg.jpeg')] pt-[2rem]">
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
      <LogIn />
    </div>
  );
}
