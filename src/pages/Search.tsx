import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PageTitle from '@/components/common/PageTitle';
import Input from '@/components/common/Input';

const Search = () => {
  return (
    <StyledSearch>
      <PageTitle title="검색" />
      <div className="searchArea">
        <form action="">
          <Input
            inputType="text"
            placeholder="검색어를 임력해 주세요."
            classType="text-search"
            autoFocus
          />
          <div className="selectBox">
            <select name="" id="">
              <option value="">대출종류</option>
            </select>
            <select name="" id="">
              <option value="">최소나이</option>
            </select>
            <select name="" id="">
              <option value="">대상성별</option>
            </select>
            <select name="" id="">
              <option value="">금리유형</option>
            </select>
            <select name="" id="">
              <option value="">평균금리</option>
            </select>
          </div>
        </form>
      </div>
      <ul className="productsArea">
        <li>상품1</li>
        <li>상품2</li>
        <li>상품3</li>
      </ul>
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  padding: 0 0 0 10px;
  height: 100%;

  .searchArea {
    padding-right: 10px;
  }

  .productsArea {
    height: calc(100% - 170px);
    padding-right: 10px;
    overflow-y: auto;
  }
`;
