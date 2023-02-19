import { ROUTES } from '@/constants/routes';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

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
        <Button width="100%" height="50px" onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.id))}>
          자세히 보기
        </Button>
      </div>
      <div className="heartCheck">
        <input type="checkbox" id={data.id} />
        <label htmlFor={data.id} title="찜하기"></label>
      </div>
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
      font-size: 17px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .textBox {
      display: flex;
      gap: 1.6rem;
      margin-bottom: 20px;

      p {
        display: flex;
        flex-direction: column;
        color: ${COLORS.gray};

        span {
          color: ${COLORS.mainText};
          font-size: 17px;
          margin-top: 5px;
        }
      }
    }
  }

  .heartCheck {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 35px;

    /*      CHECKBOX         */

    input[type='checkbox'] {
      display: none !important;
    }

    input[type='checkbox'] + label {
      position: relative;
      padding-left: 35px;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
    }

    input[type='checkbox'] + label:before {
      content: '🤍';
      border: 1px solid transparent;
      border-radius: 3px;
      display: block;
      position: absolute;
      transition: 0.5s ease;
    }

    input[type='checkbox']:checked + label:before {
      border: 1px solid transparent;
      background-color: transparent;
    }

    input[type='checkbox']:checked + label:after {
      content: '❤️';
      font-size: 18px;
      position: absolute;
      transition: 0.5s ease;
    }
  }
`;
