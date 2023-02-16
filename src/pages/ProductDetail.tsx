import Image from '@/components/common/Image';
import PageTitle from '@/components/common/PageTitle';
import { IProduct } from '@/interfaces/product';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { MESSAGES } from '@/constants/messages';
import COLORS from '@/styles/colors';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        // const data = await getProduct();
        // setProduct(data);
        const data: IProduct = {
          id: '3',
          title: '귀여운 고양이 신용대출',
          bank: '신한은행',
          interestRate: '2.0',
          description1: '항목1',
          description2: '항목2',
          description3: '항목3',
          description4: '항목4',
        };
        setProduct(data);
      } catch (error) {
        alert(MESSAGES.ERROR_PRODUCT.GET_DETAIL);
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  return (
    <ProductContainer>
      <PageTitle title="상품 상세" />
      <ProductTitle>
        <Image src="/images/test-cat.jpg" width="70" height="70" />
        <TextContainer>
          <BankText>{product.bank}</BankText>
          <ProductText>{product.title}</ProductText>
        </TextContainer>
      </ProductTitle>
      <ProductDesc></ProductDesc>
    </ProductContainer>
  );
};

export default ProductDetail;

const ProductContainer = styled.div`
  padding: 0 10px;
`;

const ProductTitle = styled.div`
  display: flex;
  gap: 10px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  padding: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
`;

const BankText = styled.p`
  font-size: 14px;
`;

const ProductText = styled.p`
  font-size: 16px;
`;

const ProductDesc = styled.div``;
