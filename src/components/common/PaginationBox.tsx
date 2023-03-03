import styled from '@emotion/styled';
import React from 'react';
import Pagination from 'react-js-pagination';

interface Props {
  page: number;
  totCnt: number;
  handlePageChange: any;
}

const PaginationBox = ({ page, totCnt, handlePageChange }: Props) => {
  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={totCnt}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default PaginationBox;

const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 34px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 13px;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;
