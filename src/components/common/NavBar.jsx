import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DropMenu from "./DropMenu";

export default function NavBar() {
  const [dropMenuItems, setDropMenuItems] = useState([]);
  const [dropMenuShowed, setDropMenuShowed] = useState(false);

  const showDropMenu = (items) => {
    setDropMenuItems(items);
    setDropMenuShowed(!dropMenuShowed);
  };

  return (
    <header className="fixed top-0 z-10 m-auto flex w-full items-center justify-between bg-[#060606] py-3 pl-16 pr-14">
      <Link to="/" className="logo">
        BOOKFLIX
      </Link>
      <ul className="flex w-[20%] items-center justify-between">
        <li>
          <Link
            className={
              useLocation().pathname == "/"
                ? "text-lg font-semibold"
                : "text-lg"
            }
            to="/"
          >
            Libros
          </Link>
        </li>
        <li>
          <Link
            className={
              useLocation().pathname == "/generos"
                ? "text-lg font-semibold"
                : "text-lg"
            }
            to="/generos"
          >
            Géneros
          </Link>
        </li>
        <li
          className="flex cursor-pointer items-center justify-center"
          onClick={() => {
            showDropMenu([
              ["Perfil", "personFilled"],
              ["Guardados", "bookmarkFilled"],
              ["Cerrar sesión", "logoutFilled"],
            ]);
          }}
        >
          <img
            src="https://avatarfiles.alphacoders.com/203/thumb-1920-203661.jpg"
            className="w-8 border-[1px] border-white"
          />
          <span className="material-symbols-outlined text-3xl">
            {dropMenuShowed ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
        </li>
        {dropMenuShowed && (
          <DropMenu
            items={dropMenuItems}
            handleItemClick={() => setDropMenuShowed(false)}
          />
        )}
      </ul>
    </header>
  );
}
