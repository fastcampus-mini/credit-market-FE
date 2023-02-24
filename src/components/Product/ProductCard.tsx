import { deleteFavor } from '@/apis/favor';
import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { IProduct } from '@/interfaces/product';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { setModal } from '@/store/modalSlice';
import COLORS from '@/styles/colors';
import { getBankLogo } from '@/utils/bankLogo';
import styled from '@emotion/styled';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Image from '../common/Image';
import CartButton from './CartButton';
import FavorButton from './FavorButton';

interface Props {
  data: IProduct;
  isDetail?: boolean;
  isFavor?: boolean;
}

const ProductCard = ({ data, isDetail, isFavor }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    productId,
    companyName,
    favorite,
    productName,
    productTypeName,
    avgInterest,
    optionsInterestType,
  } = data;

  const handleDeleteFavor = async () => {
    try {
      dispatch(showLoading());
      await deleteFavor(productId);
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.FAVOR.ERROR_DELETE,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <StyledProductCard>
      <CardContainer>
        <LogoTitle>
          <BankWrap>
            <Image src={companyName && getBankLogo(companyName)} alt={companyName} width="30px" />
            <h2>{companyName}</h2>
          </BankWrap>
          <ButtonWrap>
            {isDetail && <CartButton productId={productId} />}
            {!isFavor ? (
              <FavorButton productId={productId} isFavor={favorite} />
            ) : (
              <Button
                buttonType="text"
                width="fit-content"
                height="16px"
                onClick={handleDeleteFavor}
                title={'삭제'}
                scale={'1.3'}
              >
                <AiOutlineClose size="16px" />
              </Button>
            )}
          </ButtonWrap>
        </LogoTitle>
        <p className="productName">{productName}</p>
        <div className="textBox">
          <p>
            대출종류<span>{productTypeName}</span>
          </p>
          <p>
            평균금리<span>{avgInterest}%</span>
          </p>
          <p>
            금리구분<span>{optionsInterestType}</span>
          </p>
        </div>
        {!isDetail && (
          <Button
            width="100%"
            height="40px"
            onClick={() => navigate(ROUTES.PRODUCT_BY_ID(productId), { state: productId })}
            marginTop="10px"
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
    padding-bottom: 10px;

    p {
      display: flex;
      width: 25%;
      flex-direction: column;
      color: ${COLORS.gray};
      font-weight: normal;

      span {
        color: ${COLORS.mainText};
        font-size: 15px;
        font-weight: bold;
        margin-top: 5px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

const ButtonWrap = styled.div`
  height: 30px;
  display: flex;
  position: relative;
`;
