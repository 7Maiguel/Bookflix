import { useEffect, useState } from "react";
import UserInfo from "../components/user/UserInfo";
import SpinnerLoader from "../components/common/SpinnerLoader";
import UserForm from "../components/user/UserForm";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [editingMode, setEditingMode] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    setTimeout(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="page-container pt-[5.5rem]">
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
    </div>
  );
}
