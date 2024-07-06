import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import {
  SearchBarBarContainer,
  SearchBarContainer,
  SearchBarDropDown,
  SearchBarInput,
  SearchBarSearch,
  SearchBarSpinner,
} from "./styles";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AutoComplete from "../autocomplete/AutoComplete";
import { getFuzzyResults } from "../../services/FussySearch";

interface SearchBarProps {
  setSearchTerm: (val: string) => void;
  searchTerm: string;
  data: any[] | undefined;
  status: "error" | "success" | "pending";
  isError: boolean;
  isLoading: boolean;
}

const SearchBar = ({
  setSearchTerm,
  searchTerm,
  data,
  status,
}: SearchBarProps) => {
  const [suggestedResults, setSuggestedResults] = useState<any[]>([]);
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

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarBarContainer>
          <SearchBarSearch icon={faSearch} onClick={closeSuggestions} />
          <SearchBarInput
            onKeyDown={onKeyDown}
            onChange={onSearch}
            value={searchTerm}
            onFocus={closeSuggestions}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
        </SearchBarBarContainer>
        {showSuggestions && searchTerm && (
          <SearchBarDropDown>
            {status === "pending" ? (
              <SearchBarSpinner icon={faSpinner} spin size="xl" />
            ) : status === "error" ? (
              <AutoComplete value="Error" />
            ) : status === "success" && suggestedResults.length > 0 ? (
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
        )}
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
