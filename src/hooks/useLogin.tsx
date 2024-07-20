import { useState } from "react";
import { UserPartial, UserRoles } from "../types/User";
import { login } from "../services/FetchData";
import { addData, clearData } from "../services/Storage";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<UserRoles>("Visitor");
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const onLogin = async (userData: UserPartial) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        try {
          const user = login(userData);
          setRole(user.role);
          addData("user", JSON.stringify(user));
          setUsername(userData.username);
          res(user);
        } catch (e: any) {
          rej(new Error(e));
        }
      }, 100);
    });
  };
  const onLogout = async () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        try {
          clearData();
          setUsername("");
          setRole("Visitor");
          res("");
        } catch (e: any) {
          rej(new Error(e));
        }
      }, 100);
    });
  };

  // const changeIsOpen = (val = !isOpenLogin) => {
  //   setIsOpenLogin(val);
  // };

  const openLogin = () => {
    if (role === "Visitor") {
      setIsOpenLogin(true);
    } else {
      alert("Log in as Admin Morty!");
    }
  };

  const openCloseLogin = () => {
    setIsOpenLogin(false);
  };

  return {
    onLogin,
    openLogin,
    openCloseLogin,
    onLogout,
    isOpenLogin,
    username,
    role,
  };
};

export default useLogin;
