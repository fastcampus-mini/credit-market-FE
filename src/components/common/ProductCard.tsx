import { ROUTES } from '@/constants/routes';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

interface Prop {
  data: { id: string; title: string; bank: string };
  bankLogo: string | undefined;
  bankTitle: string;
  productName: string;
  Favor: boolean;
  loanTitle: string;
  rateAverage: string;
  rateSort: string;
}

const ProductCard = ({
  data,
  bankLogo,
  bankTitle,
  productName,
  Favor = false,
  loanTitle,
  rateAverage,
  rateSort,
}: Prop) => {
  const navigate = useNavigate();
  return (
    <StyledProductCard>
      <div className="cardCon">
        <div className="logoTitle">
          <img className="bankLogo" src={bankLogo} alt={bankTitle} />
          <h2 className="bankTitle">{bankTitle}</h2>
        </div>
        <p className="productName">{productName}</p>
        <div className="textBox">
          <p>
            대출종류<span>{loanTitle}</span>
          </p>
          <p>
            평균금리<span>{rateAverage}</span>
          </p>
          <p>
            금리구분<span>{rateSort}</span>
          </p>
        </div>
        <Button width="100%" height="40px" onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.id))}>
          자세히 보기
        </Button>
      </div>
      <Input classType="heartBtn" inputType="checkbox" id={data.id} top="15px" right="35px" />
    </StyledProductCard>
  );
};

export default ProductCard;

const StyledProductCard = styled.li`
  background-color: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.6rem;
  border: 1px solid ${COLORS.lightGray};
  font-size: 12px;
  font-weight: bold;
  position: relative;

  .cardCon {
    .logoTitle {
      display: flex;
      gap: 7px;
      font-weight: bold;
      align-items: center;
      margin-bottom: 10px;
      color: ${COLORS.primary};

      .bankLogo {
        width: 30px;
      }
    }

    .productName {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    .textBox {
      display: flex;
      gap: 1.6rem;
      margin-bottom: 15px;

      p {
        display: flex;
        width: 25%;
        flex-direction: column;
        color: ${COLORS.gray};
        font-size: 12px;

        span {
          color: ${COLORS.mainText};
          font-size: 15px;
          margin-top: 5px;
        }
      }
    }
  }
`;
