import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { MainContainer, MainHeader } from "./styles";
import useDebounce from "../../hooks/useDebounce";
import useFetchAll from "../../hooks/useFetchAll";
import Cards from "../cards/Cards";
import Login from "../login/Login";
import useLogin from "../../hooks/useLogin";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { debounceVal } = useDebounce(searchTerm);
  const { data, status, isError, isLoading } = useFetchAll(debounceVal);
  const {
    onLogin,
    openLogin,
    openCloseLogin,
    onLogout,
    isOpenLogin,
    username,
    role,
  } = useLogin();

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
