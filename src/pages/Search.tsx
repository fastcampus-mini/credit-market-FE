import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PageTitle from '@/components/common/PageTitle';
import Input from '@/components/common/Input';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import ProductCard from '@/components/Product/ProductCard';
import { IProducts } from '@/interfaces/product';

const Search = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        const data: IProducts[] = [
          {
            id: '1',
            productName: '직장인 신용대출',
            bankName: '우리은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '2',
            productName: '주부 신용대출',
            bankName: '국민은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '3',
            productName: '고양이 신용대출',
            bankName: '신한은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '4',
            productName: '주부 신용대출',
            bankName: '국민은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '5',
            productName: '직장인 신용대출',
            bankName: '우리은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '6',
            productName: '주부 신용대출',
            bankName: '신한은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '7',
            productName: '고양이 신용대출',
            bankName: '국민은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
          {
            id: '8',
            productName: '대학생 신용대출',
            bankName: '제주은행',
            isFavor: false,
            loanType: '대출',
            rateAvg: '3.4%',
            rateType: '대출',
          },
        ];
        setProducts(data);
      } catch (error) {
        alert(MESSAGES.ERROR_PRODUCT.GET_DETAIL);
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
        <form action="">
          <Input
            inputType="text"
            placeholder="검색어를 입력해 주세요."
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            bankName={`${product.bankName}은행`}
            productName={product.productName}
            isFavor={false}
            loanType={product.loanType}
            rateAvg={product.rateAvg}
            rateType={product.rateType}
          />
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
