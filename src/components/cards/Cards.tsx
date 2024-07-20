import React, { MouseEvent, useState } from "react";
import { CardsContainer, CardsPagination } from "./styles";
import "./styles.css";
import Card from "../card/Card";
import { typeAdmin } from "../../types/User";
import useLogin from "../../hooks/useLogin";

interface CardsProps {
  data: any[];
}

const minHeight = 32;

const h1Size = 43 + 21 * 2;

const searchBarSize = 40;

const Cards = ({ data }: CardsProps) => {
  const { clientWidth, clientHeight } = document.documentElement;
  const itemsPerPage = Math.min(
    10,
    Math.floor(clientWidth / 330) *
      Math.floor((clientHeight - minHeight * 2 - h1Size - searchBarSize) / 380)
  );
  const {
    userObj: { role },
    openLogin,
  } = useLogin();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage) || 1;

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const openLoginMenu = (e: MouseEvent<unknown>) => {
    e.stopPropagation();
    role !== typeAdmin && openLogin();
  };

  return (
    <>
      {data.length > 0 && (
        <CardsPagination
          breakLabel="..."
          className="react-paginate"
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
        />
      )}
      <CardsContainer>
        {currentItems.map((val) => (
          <Card data={val} key={val.name + val.id} openLogin={openLoginMenu} />
        ))}
      </CardsContainer>
    </>
  );
};

export default Cards;
