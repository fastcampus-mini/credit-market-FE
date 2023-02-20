import { ROUTES } from '@/constants/routes';
import { IProducts } from '@/interfaces/product';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';

const ProductCard = ({
  id,
  bankLogo,
  bankName,
  productName,
  isFavor = false,
  loanType,
  rateAvg,
  rateType,
}: IProducts) => {
  const navigate = useNavigate();
  return (
    <StyledProductCard>
      <div className="cardCon">
        <div className="logoTitle">
          <img className="bankLogo" src={bankLogo} alt={bankName} />
          <h2 className="bankTitle">{bankName}</h2>
        </div>
        <p className="productName">{productName}</p>
        <div className="textBox">
          <p>
            대출종류<span>{loanType}</span>
          </p>
          <p>
            평균금리<span>{rateAvg}</span>
          </p>
          <p>
            금리구분<span>{rateType}</span>
          </p>
        </div>
        <Button width="100%" height="50px" onClick={() => navigate(ROUTES.PRODUCT_BY_ID(id))}>
          자세히 보기
        </Button>
      </div>
      <Input classType="heartBtn" inputType="checkbox" id={id} top="15px" right="35px" />
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
      gap: 10px;
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
      margin-bottom: 20px;

      p {
        display: flex;
        width: 25%;
        flex-direction: column;
        color: ${COLORS.gray};
        font-weight: normal;

        span {
          color: ${COLORS.mainText};
          font-size: 16px;
          font-weight: bold;
          margin-top: 5px;
        }
      }
    }
  }
`;
