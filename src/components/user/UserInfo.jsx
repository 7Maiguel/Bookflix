import { useState } from "react";
import useLocalStorage from "../../hooks/localstorage";
import { censorString } from "../../utils/strings";
import CustomIcon from "../common/CustomIcon";

export default function UserInfo() {
  const [sessionUser] = useLocalStorage("user", null);
  const [censoringData, setCensoringData] = useState(true);

  return (
    <div className="flex h-[320px] w-[55%]">
      <img
        className="mr-6 h-full w-[280px] rounded border-2 border-white object-cover"
        src="https://avatarfiles.alphacoders.com/203/thumb-1920-203661.jpg"
        alt="user_avatar"
      />
      <div className="relative w-[60%]">
        <b>Nombre Completo</b>
        <br />
        <span className="text-xl">{sessionUser.fullName}</span>
        <br />
        <br />
        <b>Correo Electrónico</b>
        <br />
        <div className="flex items-center">
          <span className="text-xl">
            {censoringData ? censorString(sessionUser.email, 5) : sessionUser.email}
          </span>
          <CustomIcon
            type={censoringData ? "eye" : "eyeOff"}
            styles="cursor-pointer ml-2 text-xl"
            handleClick={() => setCensoringData(!censoringData)}
          />
        </div>
        <br />
        <br />
        {/* <button className="primary-btn" onClick={activeEditingMode}>
          Editar Información
          <span className="material-symbols-outlined ml-2">edit</span>
        </button> */}
      </div>
    </div>
  );
}
