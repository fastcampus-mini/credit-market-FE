import Image from '@/components/common/Image';
import PageTitle from '@/components/common/PageTitle';
import { IProduct } from '@/interfaces/product';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { MESSAGES } from '@/constants/messages';
import COLORS from '@/styles/colors';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { ADDITIONAL_TEXTS } from '@/constants/additional';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>();

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

  const handleClick = () => {
    navigate('/buy');
  };

  return (
    <ProductContainer>
      <PageTitle title="상품 상세" />
      <ProductContent>
        <ProductTitle>
          <Image src="/images/test-cat.jpg" width="70" height="70" />
          <TextContainer>
            <BankText>{product?.bank}</BankText>
            <ProductText>{product?.title}</ProductText>
          </TextContainer>
        </ProductTitle>
        <ProductDesc>
          <DescBox>
            <DescTitle>금리 구분</DescTitle>
            <DescContent>대출금리</DescContent>
          </DescBox>
          <DescBox>
            <DescTitle>가입 방법</DescTitle>
            <DescContent>영업점,인터넷,스마트폰</DescContent>
          </DescBox>
          <DescBox>
            <DescTitle>부가 설명</DescTitle>
            <DescContent>
              {ADDITIONAL_TEXTS.map((item) => (
                <p>{item}</p>
              ))}
            </DescContent>
          </DescBox>
        </ProductDesc>
      </ProductContent>
      <Button width="100%" onClick={handleClick}>
        신청하기
      </Button>
    </ProductContainer>
  );
};

export default ProductDetail;

const ProductContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductContent = styled.div`
  overflow-y: auto;
  height: calc(100% - 149px);
  margin-bottom: 10px;
`;

const ProductTitle = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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

const ProductDesc = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 16px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const DescBox = styled.div`
  color: ${COLORS.darkGray};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -16px;
    width: 100%;
    height: 1px;
    background-color: ${COLORS.lightGray};
  }
  &:first-child::after {
    content: none;
  }
`;

const DescTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
`;

const DescContent = styled.p`
  font-size: 13px;
  line-height: 1.4;
`;
