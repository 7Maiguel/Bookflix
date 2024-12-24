import { useEffect, useState } from "react";
import UserInfo from "../components/user/UserInfo";
import SpinnerLoader from "../components/common/SpinnerLoader";
import UserForm from "../components/user/UserForm";
import useLocalStorage from "../hooks/localstorage";

export default function Profile() {
  const [sessionUser] = useLocalStorage("user", null);
  const [loading, setLoading] = useState(true);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="page-container pt-[5.5rem]">
      <h2 className="title">Mi Perfil</h2>
      <div className="flex h-[320px] w-[55%]">
        {editingMode ? (
          <UserForm
            userData={sessionUser}
            cancelEditingMode={() => setEditingMode(false)}
          />
        ) : !loading ? (
          <UserInfo
            userData={sessionUser}
            activeEditingMode={() => setEditingMode(true)}
          />
        ) : null}
      </div>
      {loading && <SpinnerLoader />}
    </div>
  );
}
