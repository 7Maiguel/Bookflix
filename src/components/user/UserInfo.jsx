import { useState } from "react";
import { censorString, joinName } from "../../utils/strings";

export default function UserInfo({ userData, activeEditingMode }) {
  const [censoringData, setCensoringData] = useState(true);

  return (
    <>
      <img
        className="mr-6 h-full w-[280px] rounded border-2 border-white object-cover"
        src="https://avatarfiles.alphacoders.com/203/thumb-1920-203661.jpg"
        alt="user_avatar"
      />
      <div className="relative w-[60%]">
        <b>Nombre Completo</b>
        <br />
        <span className="text-xl">
          {joinName(userData.name, userData.lastName)}
        </span>
        <br />
        <br />
        <b>Correo Electrónico</b>
        <br />
        <div className="flex items-center">
          <span className="text-xl">
            {censoringData ? censorString(userData.email, 5) : userData.email}
          </span>
          <span
            className="material-symbols-outlined ml-2 cursor-pointer opacity-80"
            onClick={() => setCensoringData(!censoringData)}
          >
            {censoringData ? "visibility" : "visibility_off"}
          </span>
        </div>
        <br />
        <b>Fecha de Nacimiento</b>
        <br />
        <span className="text-xl">{userData.birthdate}</span>
        <br />
        <br />
        <button className="primary-btn" onClick={activeEditingMode}>
          Editar Información
          <span className="material-symbols-outlined ml-2">edit</span>
        </button>
      </div>
    </>
  );
}
