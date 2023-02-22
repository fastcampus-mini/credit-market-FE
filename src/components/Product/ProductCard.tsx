import { ROUTES } from '@/constants/routes';
import { IProduct } from '@/interfaces/product';
import COLORS from '@/styles/colors';
import { getBankLogo } from '@/utils/bankLogo';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Image from '../common/Image';
import CartButton from './CartButton';
import FavorButton from './FavorButton';

interface Props {
  data: IProduct;
  isDetail?: boolean;
}

const ProductCard = ({ data, isDetail }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledProductCard>
      <CardContainer>
        <LogoTitle>
          <BankWrap>
            <Image
              src={data.companyName && getBankLogo(data.companyName)}
              alt={data.companyName}
              width="30px"
            />
            <h2>{data.companyName}</h2>
          </BankWrap>
          <div>
            {isDetail && <CartButton id={data.id} />}
            <FavorButton id={data.id} isFavor={data.favorite} />
          </div>
        </LogoTitle>
        <p className="productName">{data.productName}</p>
        <div className="textBox">
          <p>
            대출종류<span>{data.productTypeName}</span>
          </p>
          <p>
            평균금리<span>{data.interestRateAvg}</span>
          </p>
          <p>
            금리구분<span>{data.interestType}</span>
          </p>
        </div>
        {!isDetail && (
          <Button
            width="100%"
            height="40px"
            onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.id))}
          >
            자세히 보기
          </Button>
        )}
      </CardContainer>
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
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BankWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-weight: bold;
  align-items: center;
  margin-bottom: 10px;
  color: ${COLORS.primary};
`;
