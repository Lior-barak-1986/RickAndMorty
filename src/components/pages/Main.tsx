import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { MainContainer, MainHeader } from "./styles";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import Cards from "../cards/Cards";
import Login from "../login/Login";
import { UserPartial } from "../../types/User";
import { login } from "../../services/FetchData";
import { addData, clearData } from "../../services/Storage";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("");
  const { debounceVal } = useDebounce(searchTerm);
  const { data, status, isError, isLoading } = useFetch(debounceVal);

  const onLogin = async (userData: UserPartial) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        try {
          login(userData);
          addData("user", JSON.stringify(userData));
          setUsername(userData.username);
          res("");
        } catch (e: any) {
          rej(e);
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
          res("");
        } catch (e: any) {
          rej(e);
        }
      }, 100);
    });
  };

  return (
    <MainContainer>
      <Login username={username} onLogin={onLogin} onLogout={onLogout} />
      <MainHeader>Search Rick and Morty API</MainHeader>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        status={status}
        isError={isError}
        isLoading={isLoading}
      />
      {status === "success" && data && <Cards data={data} />}
    </MainContainer>
  );
};

export default Main;
