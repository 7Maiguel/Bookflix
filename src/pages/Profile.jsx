import { useEffect, useState } from "react";
import UserInfo from "../components/user/UserInfo";
import SpinnerLoader from "../components/common/SpinnerLoader";
import UserForm from "../components/user/UserForm";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [editingMode, setEditingMode] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    picture: "",
  });

  useEffect(() => {
    // getUserData();
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

      localStorage.setItem("user_id", data[0].id);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <>
      <h2 className="title">Mi Perfil</h2>
      <div className="flex h-[320px] w-[55%]">
        {editingMode ? (
          <UserForm
            userData={user}
            cancelEditingMode={() => setEditingMode(false)}
          />
        ) : !loading ? (
          <UserInfo
            userData={user}
            activeEditingMode={() => setEditingMode(true)}
          />
        ) : null}
      </div>
      {loading && <SpinnerLoader />}
    </>
  );
}
