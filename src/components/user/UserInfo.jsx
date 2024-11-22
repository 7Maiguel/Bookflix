import { useState, useEffect } from "react";
import { supabase } from "../../App";

export default function UserInfo() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    picture: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async function () {
    const { data, error } = await supabase.from("users").select().eq("id", 4);

    if (error) {
      console.error("Error fetching user data:", error);
      return;
    }

    if (data && data.length > 0) {
      setUser({
        name: data[0].name,
        lastName: data[0].last_name,
        birthdate: data[0].birthdate,
        email: data[0].email,
        picture: data[0].picture,
      });
    }
  };

  return (
    <div>
      <div className="flex w-[50%]">
        <img
          className="mr-6 h-[270px] w-[250px] rounded border-2 border-white"
          src={user.picture}
          alt="avatar"
        />
        <div className="">
          <b>Nombre Completo</b>
          <br />
          <span className="text-2xl">{`${user.name} ${user.lastName}`}</span>
          <br />
          <br />
          <b>Correo Electrónico</b>
          <br />
          <span className="text-2xl">{`${user.email.slice(0, 4)}${"*".repeat(user.email.slice(4).length)}`}</span>
          <br />
          <br />
          <b>Fecha de Nacimiento</b>
          <br />
          <span className="text-2xl">{user.birthdate}</span>
        </div>
      </div>
    </div>
  );
}
