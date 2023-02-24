import { ROUTES } from '@/constants/routes';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import FavorButton from '../Product/FavorButton';
import { IFavor } from '@/interfaces/favor';
import { getBankLogo } from '@/utils/bankLogo';

interface Prop {
  item: IFavor;
  isFavor: true;
}

const ProductCardFav = ({ item, isFavor }: Prop) => {
  const navigate = useNavigate();

  return (
    <StyledProductCardFav>
      <div className="cardCon">
        <div className="logoTitle">
          <img
            className="bankLogo"
            src={item.companyName && getBankLogo(item.companyName)}
            alt={item.companyName}
          />
          <h2 className="bankTitle">{item.companyName}</h2>
        </div>
        <div>
          <FavorButton productId={item.productId} isFavor={isFavor} />
        </div>
        <p className="productName">{item.productName}</p>
        <div className="textBox">
          <p>
            대출종류<span>{item.productTypeName}</span>
          </p>
          <p>
            평균금리<span>{item.avgInterest}</span>
          </p>
          <p>
            금리구분<span>{item.optionsInterestType}</span>
          </p>
        </div>
        <Button
          width="100%"
          height="50px"
          onClick={() => navigate(ROUTES.PRODUCT_BY_ID(item.productId))}
        >
          자세히 보기
        </Button>
      </div>
    </StyledProductCardFav>
  );
};

export default ProductCardFav;

const StyledProductCardFav = styled.li`
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
        margin-right: 10px;
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
