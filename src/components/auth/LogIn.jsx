import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts";
import useLocalStorage from "../../hooks/localstorage";

export default function LogIn({ openSignUpForm }) {
  const [sessionUser] = useLocalStorage("user", null);
  const { setIsUserLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  const validateUserAuth = (e) => {
    e.preventDefault();
    if (
      e.target.email.value === sessionUser.email &&
      e.target.password.value === sessionUser.password
    ) {
      setIsUserLoggedIn(true);
      navigate("/");
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <form className="mt-4" onSubmit={validateUserAuth}>
      <input type="email" name="email" placeholder="Correo Electrónico" />
      <input type="text" name="password" placeholder="Contraseña" required />
      <button
        type="submit"
        className="primary-btn my-2 w-full shadow-lg"
        disabled={!sessionUser}
      >
        Ingresar
      </button>
      <button
        type="button"
        className="secondary-btn w-full shadow-lg"
        onClick={openSignUpForm}
      >
        Registrarme
      </button>
    </form>
  );
}
