import CartItem from '@/components/Cart/CartItem';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import PageTitle from '@/components/common/PageTitle';
import { ICart } from '@/interfaces/cart';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Buy = () => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const data: ICart[] = [
      { id: '1', title: '개발자 신용대출', bank: '우리은행' },
      { id: '2', title: '감자튀김 신용대출', bank: '국민은행' },
      { id: '3', title: '고양이 신용대출', bank: '신한은행' },
      { id: '4', title: '대학생 신용대출', bank: '제주은행' },
    ];
    setCart(data);
  }, []);

  const handleClick = () => {};

  return (
    <BuyContainer>
      <PageTitle title="신청하기" />
      <BuyContent>
        <BuyItemContainer>
          {Array.isArray(cart) ? (
            cart.map((item) => <CartItem key={item.id} data={item} />)
          ) : (
            <div>담으신 상품이 없습니다.</div>
          )}
        </BuyItemContainer>
        <PolicyContainer>
          <AgreeContainer>
            <Input type="checkbox" />
            <AgreeText>필수 동의</AgreeText>
          </AgreeContainer>
          <PolicyText>
            <AiOutlineCheck />
            개인(신용)정보 조회 동의서
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            개인(신용)정보 조회 동의서(여신금융거래)
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            개인(신용)정보 조회 동의서(여신공공마이데이터)
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            은행여신거래기본약관
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            대출거래 약정서
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            개인(신용)정보 제3자 제공 동의서
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            신용보증약정서(국민행복기금)
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            계약체결 이행 등을 위한 필수동의서(국민행복기금)
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            추가약정서(국민행복기금)
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            대출거래 추가약정서(사후 용도관리 추가약정용)
          </PolicyText>
          <PolicyText>
            <AiOutlineCheck />
            [국토교통부]개인(신용)정보 수집·이용·제공 동의서
          </PolicyText>
          <FinalCheckText>
            <p>본인은 대출상품에 대한 주요내용과 비용에 대한</p>
            <p>설명을 충분히 확인했습니다.</p>
          </FinalCheckText>
        </PolicyContainer>
        <Button onClick={handleClick}>신청하기</Button>
      </BuyContent>
    </BuyContainer>
  );
};

export default Buy;

const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow-y: auto;
`;

const BuyItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* height: 470px; */
  /* overflow-y: auto; */
`;

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  margin: 10px 0;
  padding: 1rem;
`;

const AgreeContainer = styled.div`
  display: flex;
  margin: 5px 0 8px 0;
`;

const AgreeText = styled.p`
  font-size: 14px;
  margin-left: 10px;
  font-weight: 600;
`;

const PolicyText = styled.p`
  font-size: 12px;
  color: gray;
  display: flex;
  gap: 8px;
`;

const FinalCheckText = styled.div`
  font-size: 13px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`;
