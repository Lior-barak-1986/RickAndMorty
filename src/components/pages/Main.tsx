import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { MainContainer, MainHeader } from "./styles";
import useDebounce from "../../hooks/useDebounce";
import useFetchAll from "../../hooks/useFetchAll";
import Cards from "../cards/Cards";
import Login from "../login/Login";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { debounceVal } = useDebounce(searchTerm);
  const { data, status, isError, isLoading } = useFetchAll(debounceVal);

  return (
    <MainContainer>
      <Login />
      <MainHeader>Rick and Morty API</MainHeader>
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
