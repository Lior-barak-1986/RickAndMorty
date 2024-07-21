import { useState } from "react";
import { typeVisitor, UserPartial, UserRoles } from "../types/User";
import { login } from "../services/FetchData";
import { addData, clearData, getData } from "../services/Storage";
import { defaultUser } from "../util";

const useLogin = () => {
  const [userObj, setUserObj] = useState<{ username: string; role: UserRoles }>(
    JSON.parse(getData("user") || JSON.stringify(defaultUser))
  );
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const onLogin = async (userData: UserPartial) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        try {
          const user = login(userData);
          setUserObj(user);
          addData("user", JSON.stringify(user));
          res(user);
        } catch (e: any) {
          rej(new Error(e));
        }
      }, 100);
    });

  const onLogout = async () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        try {
          clearData();
          setUserObj(defaultUser);
          res("");
        } catch (e: any) {
          rej(new Error(e));
        }
      }, 100);
    });

  const openLogin = () => {
    if (userObj.role === typeVisitor) {
      setIsLoginOpen(true);
    } else {
      alert("Log in as Admin Morty!");
    }
  };

  const closeLogin = () => setIsLoginOpen(false);

  return {
    onLogin,
    openLogin,
    closeLogin,
    onLogout,
    isLoginOpen,
    userObj,
  };
};

export default useLogin;
