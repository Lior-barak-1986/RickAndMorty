import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const CardsContainer = styled.div`
  text-align: center;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  margin: 10px auto;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 10px;
`;

export const CardsPagination = styled(ReactPaginate)``;

export const CardsLine = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CardsLimit = styled.span<{ shouldBlur?: boolean }>`
  filter: ${({ shouldBlur = false }) => (shouldBlur ? "blur(0.2rem)" : "none")};
`;
