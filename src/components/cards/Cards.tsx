import React, { MouseEvent, useState } from "react";
import { CardsContainer, CardsPagination } from "./styles";
import "./styles.css";
import Card from "../card/Card";
import { UserRoles } from "../../types/User";

interface CardsProps {
  data: Array<any>;
  userRole: UserRoles;
  openLogin: () => void;
}

const minHeight = 32;

const h1Size = 43 + 21 * 2;

const searchBarSize = 40;

const Cards = ({ data, userRole, openLogin }: CardsProps) => {
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
  const handlePageClick = ({ selected }: { selected: number }) => {
    if (data) {
      const newOffset = (selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    }
  };

  const openLoginMenu = (e: MouseEvent<any>) => {
    e.stopPropagation();
    userRole !== "Rick" && openLogin();
  };

  return (
    <>
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
      <CardsContainer>
        {currentItems.map((val) => (
          <Card
            key={val.name + val.id}
            data={val}
            userRole={userRole}
            openLogin={openLoginMenu}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default Cards;
