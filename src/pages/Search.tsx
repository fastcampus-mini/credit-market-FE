import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PageTitle from '@/components/common/PageTitle';
import Input from '@/components/common/Input';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import ProductCard from '@/components/Product/ProductCard';
import { getBankLogo } from '@/utils/bankLogo';

interface Prop {
  id: string;
  title: string;
  bank: string;
}

const Search = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Prop[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        const data: Prop[] = [
          { id: '1', title: '직장인 신용대출', bank: '우리' },
          { id: '2', title: '주부 신용대출', bank: '국민' },
          { id: '3', title: '고양이 신용대출', bank: '신한' },
          { id: '4', title: '주부 신용대출', bank: '국민' },
          { id: '5', title: '직장인 신용대출', bank: '우리' },
          { id: '6', title: '주부 신용대출', bank: '신한' },
          { id: '7', title: '고양이 신용대출', bank: '국민' },
          { id: '8', title: '대학생 신용대출', bank: '제주' },
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
            data={product}
            bankLogo={getBankLogo(product.bank)}
            bankTitle={`${product.bank}은행`}
            productName={product.title}
            loanTitle="대출"
            rateAverage="3.4%"
            rateSort="대출"
            Favor={false}
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
