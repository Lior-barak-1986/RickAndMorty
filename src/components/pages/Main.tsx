import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { MainContainer, MainHeader } from "./styles";
import useDebounce from "../../hooks/useDebounce";
import useFetchAll from "../../hooks/useFetchAll";
import Cards from "../cards/Cards";
import Login from "../login/Login";
import { UserPartial, UserRoles } from "../../types/User";
import { login } from "../../services/FetchData";
import { addData, clearData } from "../../services/Storage";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<UserRoles>("Visitor");
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const { debounceVal } = useDebounce(searchTerm);
  const { data, status, isError, isLoading } = useFetchAll(debounceVal);

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

  return (
    <MainContainer>
      <Login
        username={username}
        onLogin={onLogin}
        onLogout={onLogout}
        isOpen={isOpenLogin}
        openLogin={openLogin}
        closeLogin={openCloseLogin}
      />
      <MainHeader>Rick and Morty API</MainHeader>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        status={status}
        isError={isError}
        isLoading={isLoading}
      />
      {status === "success" && data && (
        <Cards userRole={role} data={data} openLogin={openLogin} />
      )}
    </MainContainer>
  );
};

export default Main;
