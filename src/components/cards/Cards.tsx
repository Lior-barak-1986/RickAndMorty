import React, { useMemo, useState } from "react";
import { CardsContainer, CardsPagination } from "./styles";
import "./styles.css";
import Card from "../card/Card";

interface CardsProps {
  data: Array<any>;
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
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset) || [];
  const pageCount = Math.ceil(data.length / itemsPerPage) || 1;

  // Invoke when user click to request another page.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePageClick = (event: any) => {
    if (data) {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    }
  };

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      > */}
      {data.length > 0 && (
        <CardsPagination
          className="react-paginate"
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
        />
      )}
      {/* </div> */}
      <CardsContainer>
        {currentItems.map((val) => (
          <Card key={val.name + val.id} data={val} />
        ))}
      </CardsContainer>
    </>
  );
};

export default Cards;
