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
              <p>마이너스 통장 선택 시 적용금리가 연 0.5% 가산됩니다.</p>{' '}
              <p>
                기본금리와 적용금리, 우대금리 요건은 재직업체에 따라 상이하며 계산 방법에 따라
                변동될 수 있습니다.
              </p>
              <p>
                대출만기 도래 시 은행의 심사 결과에 따라 대출금 상환 또는 대출기한 연기가 가능하며
                1년 단위로 최장 20년까지 연장이 가능합니다.
              </p>
              <p>
                이자는 이자계산일 (매월 셋째 주 토요일 또는 매월 마지막 주 토요일, 공휴일인 때에는
                그 직전영업일)의 익일자로 대출원금에 가산하고, 잔액이 예금일 경우에는 동 예금에서
                납부합니다.
              </p>
              <p>
                중도 상환 수수료 = 기한전 상환대출 금액 X 기한전 상환 수수료율 X (잔존일수 /
                약정기간) 이며 대출개시일로부터 3년 이내 상환 시 적용합니다.
              </p>
              <p>
                소득 및 재직을 자동으로 확인할 수 없는 경우 '건강보험공단'의 건강보험자격득실확인서,
                건강장기요양보험료 납부확인서 등이 필요합니다.
              </p>
              <p>
                인증서가 있는 스마트폰 또는 PC에서 공동인증서 비밀번호를 입력하면 자동 제출이
                가능합니다.
              </p>
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
