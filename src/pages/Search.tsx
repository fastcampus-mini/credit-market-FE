import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PageTitle from '@/components/common/PageTitle';
import Input from '@/components/common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import ProductCard from '@/components/Product/ProductCard';
import { IProduct } from '@/interfaces/product';
import { getRandomSearchList, getRecommentList, getSearchList } from '@/apis/product';
import { getCookie } from '@/utils/cookie';
import axios from 'axios';
import { setSearch } from '@/store/SearchSlice';
import { ISearch } from '@/interfaces/Search';
import { axiosInstance } from '@/apis/instance';
import { API_URLS } from '@/constants/apiUrls';
import { RootState } from '@/store/store';
import { setReduxProducts } from '@/store/reduxProducts';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);
  const reduxProducts = useSelector((state: RootState) => state.reduxProducts);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch({ keyword: event.target.value }));
    console.log(search);
  };

  const handleClick = async () => {
    try {
      dispatch(showLoading());
      const response = await axiosInstance.get(API_URLS.SEARCH(search));
      console.log(response);
      try {
        setProducts(response as []);
      } catch (err) {
        console.log(err);
      }
    } catch (error: any) {
    } finally {
      dispatch(hideLoading());
    }
  };

  const [products, setProducts] = useState<IProduct[]>([]);
  const userName = getCookie('userName');

  async function getProducts() {
    try {
      dispatch(showLoading());
      if (userName) {
        const data = await getRecommentList();
        setProducts(data);
      } else {
        const randomData = await getRandomSearchList();
        setProducts(randomData);
      }
    } catch (error) {
      alert(MESSAGES.PRODUCT.ERROR_GET_PRODUCT);
    } finally {
      dispatch(hideLoading());
    }
  }
  // useEffect(() => {
  //   getProducts();
  //   console.log(products);
  // }, []);

  return (
    <StyledSearch>
      <PageTitle title="상품 검색" />
      <div className="searchArea">
        <div>
          <Input
            inputType="text"
            placeholder="검색어를 입력해 주세요."
            onChange={handleChange}
            onButtonClick={handleClick}
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
        </div>
      </div>
      <ul className="productsArea">
        {products.map((product) => (
          <ProductCard key={product.productId} data={product} />
        ))}
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
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
