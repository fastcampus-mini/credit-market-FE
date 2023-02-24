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
import { SelectedValuesType } from '@/interfaces/Search';
import Button from '@/components/common/Button';

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

  const [selectedValues, setSelectedValues] = useState<SelectedValuesType>({});
  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues({
      ...selectedValues,
      [event.target.name]: event.target.value,
    });
    dispatch(
      setSearch({
        loan: selectedValues.loan,
        age: selectedValues.age,
        gender: selectedValues.sex,
        interest: selectedValues.interest,
        // avg: selectedValues.avgInterest,
      }),
    );

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

  const onClickHandler = async () => {
    dispatch(setSearch({}));
    console.log(search);
    try {
      dispatch(showLoading());
      const response: IProduct[] = await axiosInstance.get(API_URLS.SEARCH(search));
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
            <select name="loan" value={selectedValues.loan} onChange={handleSelectChange}>
              <option value="">대출종류</option>
              <option value="일반신용대출">일반신용대출</option>
              <option value="일반신용대출">일반신용대출</option>
              <option value="일반신용대출">일반신용대출</option>
            </select>
            <select name="age" value={selectedValues.age} onChange={handleSelectChange}>
              <option value="">최소나이</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
            <select name="sex" value={selectedValues.sex} onChange={handleSelectChange}>
              <option value="">대상성별</option>
              <option value="남">남성</option>
              <option value="여">여성</option>
            </select>
            <select name="interest" value={selectedValues.interest} onChange={handleSelectChange}>
              <option value="">금리유형</option>
              <option value="대출금리">대출금리</option>
              <option value="대출금리">대출금리</option>
              <option value="대출금리">대출금리</option>
            </select>
            {/* <select
              name="avgInterest"
              value={selectedValues.avgInterest}
              onChange={handleSelectChange}
            >
              <option value="">평균금리</option>
              <option value="10.0">10.0 미만</option>
              <option value="20.0">20.0</option>
              <option value="30.0">30.0</option>
              <option value="40.0">40.0</option>
            </select> */}
            <Button height="auto" onClick={onClickHandler}>
              초기화
            </Button>
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

  .selectBox {
    gap: 2px;
    > button {
      border-radius: 5px;
      margin-left: 10px;
      font-size: 11px;
      font-weight: bold;
    }
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
