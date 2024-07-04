import React from "react";
import { AutoCompleteContainer } from "./styles";

interface AutoCompleteProps {
  value: string;
  onPress?: (value: string) => void;
}
const AutoComplete = ({ value, onPress }: AutoCompleteProps) => {
  const onClick = () => {
    if (onPress) onPress(value);
  };
  return (
    <AutoCompleteContainer onClick={onClick}>{value}</AutoCompleteContainer>
  );
};

export default AutoComplete;
