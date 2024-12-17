import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import DropMenu from "./DropMenu";

export default function NavBar() {
  // const [dropMenuItems, setDropMenuItems] = useState([]);
  const [dropMenuActive, setDropMenuActive] = useState(false);

  return (
    <nav className="fixed top-0 z-10 m-auto flex w-full items-center justify-between bg-[#060606] py-3 pl-16 pr-14">
      <Link to="/" className="logo">
        BOOKFLIX
      </Link>
      <ul className="flex w-[20%] items-center justify-between">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lg font-semibold" : "text-lg"
            }
            to="/"
          >
            Libros
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lg font-semibold" : "text-lg"
            }
            to="/generos"
          >
            Géneros
          </NavLink>
        </li>
        <li
          className="flex cursor-pointer items-center justify-center"
          onClick={() => setDropMenuActive(!dropMenuActive)}
        >
          <img
            src="https://avatarfiles.alphacoders.com/203/thumb-1920-203661.jpg"
            className="w-8 border-[1px] border-white"
          />
          <span className="material-symbols-outlined text-3xl">
            {dropMenuActive ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
        </li>
        {dropMenuActive && <DropMenu setDropMenuActive={setDropMenuActive} />}
      </ul>
    </nav>
  );
}
