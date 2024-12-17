import { useContext } from "react";
import { GlobalContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/localstorage";

export default function LogIn() {
  const [user] = useLocalStorage("user", null);
  const { setIsUserLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  const validateUserAuth = (e) => {
    e.preventDefault();
    if (
      e.target.email.value === user.email &&
      e.target.password.value === user.password
    ) {
      setIsUserLoggedIn(true);
      navigate("/");
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="relative flex w-[35%] flex-col rounded bg-gray-200 px-6 pb-7 pt-5 text-black">
      <h1 className="text-3xl font-semibold">¡Bienvenido!</h1>

      <form className="my-4" onSubmit={validateUserAuth}>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Contraseña" />
        <button
          type="submit"
          className="primary-btn w-full shadow-lg"
          disabled={!user}
        >
          Ingresar
        </button>
      </form>

      <button className="secondary-btn w-full shadow-lg">Registrarme</button>
    </div>
  );
}
