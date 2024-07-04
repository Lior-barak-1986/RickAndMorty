import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { MainContainer, MainHeader } from "./styles";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import Cards from "../cards/Cards";

type Props = {};

const Main = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { debounceVal } = useDebounce(searchTerm);
  const { data, status, isError, isLoading } = useFetch(debounceVal);
  return (
    <MainContainer>
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
