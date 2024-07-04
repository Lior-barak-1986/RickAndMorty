import React, { ChangeEvent, useEffect, useState } from "react";
import {
  SearchBarBarContainer,
  SearchBarContainer,
  SearchBarDropDown,
  SearchBarInput,
  SearchBarSearch,
} from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import useDebounce from "../../hooks/useDebounce";
import AutoComplete from "../autocomplete/AutoComplete";
// import useFetch from "../../hooks/useFetch";
import { getFuzzyResults } from "../../services/FussySearch";
// import Card from "../card/Card";

interface SearchBarProps {
  setSearchTerm: (val: string) => void;
  searchTerm: string;
  data: Array<any> | undefined;
  status: "error" | "success" | "pending";
  isError: boolean;
  isLoading: boolean;
}

const SearchBar = ({
  setSearchTerm,
  searchTerm,
  data,
  status,
  isError,
  isLoading,
}: SearchBarProps) => {
  const [suggestedResults, setSuggestedResults] = useState<Array<any>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (status === "success") {
      data &&
        setSuggestedResults(
          getFuzzyResults(
            data,
            {
              keys: ["name"],
            },
            searchTerm
          )
        );
    } else {
      setSuggestedResults([]);
    }
  }, [searchTerm, status, data]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const onSelect = (value: string) => {
    setSearchTerm(value);
    setShowSuggestions(false);
  };

  const closeSuggestions = () => setShowSuggestions(!showSuggestions);
  return (
    <>
      <SearchBarContainer>
        <SearchBarBarContainer>
          <SearchBarSearch icon={faSearch} onClick={closeSuggestions} />
          <SearchBarInput
            onChange={onSearch}
            value={searchTerm}
            onFocus={closeSuggestions}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
        </SearchBarBarContainer>
        {status === "success" ? (
          showSuggestions &&
          searchTerm && (
            <SearchBarDropDown>
              {suggestedResults.length > 0 ? (
                suggestedResults.map((results: any) => (
                  <AutoComplete
                    key={results.item.name + results.item.id}
                    onPress={onSelect}
                    value={results.item.name}
                  />
                ))
              ) : (
                <AutoComplete value="No Result/s found" />
              )}
            </SearchBarDropDown>
          )
        ) : status === "pending" ? (
          <div>test</div>
        ) : (
          <div></div>
        )}
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
