import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PageTitle from '@/components/common/PageTitle';
import Input from '@/components/common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import ProductCard from '@/components/Product/ProductCard';
import { IProduct } from '@/interfaces/product';
import { getCookie } from '@/utils/cookie';
import { setSearch } from '@/store/SearchSlice';
import { axiosInstance } from '@/apis/instance';
import { API_URLS } from '@/constants/apiUrls';
import { RootState } from '@/store/store';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch({ keyword: event.target.value }));
    console.log(search);
  };

  const handleClick = async () => {
    try {
      dispatch(showLoading());
      const response: IProduct[] = await axiosInstance.get(API_URLS.SEARCH(search));
      console.log(response);
      try {
        setProducts(response);
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

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        if (userName) {
          const data: IProduct[] = await axiosInstance.get(API_URLS.RECOMMEND);
          setProducts(data);
        } else {
          const randomData: IProduct[] = await axiosInstance.get(API_URLS.RANDOM_SEARCH);
          setProducts(randomData);
        }
      } catch (error) {
        alert(MESSAGES.PRODUCT.ERROR_GET_PRODUCT);
      } finally {
        dispatch(hideLoading());
      }
    }
    getProducts();
  }, []);

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
