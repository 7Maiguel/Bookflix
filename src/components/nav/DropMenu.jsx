import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts";
import CustomIcon from "../common/CustomIcon";

export default function DropMenu({ setDropMenuActive }) {
  const { setIsUserLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.setItem("logged_in", JSON.stringify(false));
    setDropMenuActive(false);
    setIsUserLoggedIn(false);
    navigate("/login");
  };

  return (
    <ul className="absolute right-10 top-[3.5rem] flex flex-col justify-between border-[1px] bg-[#060606]">
      <li>
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center px-2 py-2 ${isActive ? "font-semibold" : ""}`
          }
          to="/perfil"
        >
          <CustomIcon styles="mr-2" type="personFilled" />
          Mi perfil
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center px-2 ${isActive ? "font-semibold" : ""}`
          }
          to="/guardados"
        >
          <CustomIcon styles="mr-2" type="bookmarkFilled" />
          Guardados
        </NavLink>
      </li>
      <li
        className="flex w-full cursor-pointer items-center px-2 py-2"
        onClick={signOut}
      >
        <CustomIcon styles="mr-2" type="logoutFilled" />
        Cerrar sesión
      </li>
    </ul>
  );
}
