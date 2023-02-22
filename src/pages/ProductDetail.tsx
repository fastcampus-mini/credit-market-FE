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
import { ROUTES } from '@/constants/routes';
import ProductCard from '@/components/Product/ProductCard';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>({
    id: '3',
    productName: '고양이 신용대출',
    companyName: '신한은행',
    favorite: false,
    productTypeName: '대출',
    interestRateAvg: '3.4%',
    interestType: '대출',
    productJoinMethod: '영업점,인터넷,스마트폰',
  });

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        // const data = await getProduct();
        // setProduct(data);
      } catch (error) {
        alert(MESSAGES.PRODUCT.ERROR_GET_DETAIL);
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  const handleClick = () => {
    navigate(ROUTES.BUY);
  };

  return (
    <ProductContainer>
      <PageTitle title="상품 상세" />
      <ProductContent>
        <ProductCard data={product} isDetail={true} />
        <ProductDesc>
          <DescBox>
            <DescTitle>가입 방법</DescTitle>
            <DescContent>{product.productJoinMethod}</DescContent>
          </DescBox>
          <DescBox>
            <DescTitle>부가 설명</DescTitle>
            <DescContent>
              {ADDITIONAL_TEXTS.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </DescContent>
          </DescBox>
        </ProductDesc>
      </ProductContent>
      <Button width="calc(100% - 10px)" onClick={handleClick}>
        신청하기
      </Button>
    </ProductContainer>
  );
};

export default ProductDetail;

const ProductContainer = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductContent = styled.ul`
  overflow-y: auto;
  height: calc(100% - 149px);
  margin-bottom: 10px;
  padding-right: 10px;
`;

const ProductDesc = styled.li`
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
  &:first-of-type::after {
    content: none;
  }
`;

const DescTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
`;

const DescContent = styled.div`
  font-size: 13px;
  line-height: 1.4;
`;
