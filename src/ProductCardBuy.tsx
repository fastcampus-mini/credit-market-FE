import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { ROUTES } from '@/constants/routes';
import { IBuy } from '@/interfaces/buy';
import { getBankLogo } from '@/utils/bankLogo';
import { setModal } from '@/store/modalSlice';
import { MESSAGES } from '@/constants/messages';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
<<<<<<< HEAD:src/components/common/ProductCardBuy.tsx
=======
import React from 'react';
import Button from './components/common/Button';
import { useNavigate } from 'react-router-dom';
import FavorButton from './components/Product/FavorButton';
>>>>>>> f374c55ef3419bb118d8b372fb0fe01a0fa34405:src/ProductCardBuy.tsx

interface Prop {
  item: IBuy
  onClick: () => void
}

const ProductCardBuy = ({ item }: Prop) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    return (
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: handleDeleteFromBuy,
          onClickCancel: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.MYPAGE.BUY.CHECK_DELETE,          
        }),
      )      
    )
  }

  const handleDeleteFromBuy = () => {
    dispatch(
    setModal({ 
      isOpen: true,
      onClickOk: () => {
        dispatch(setModal({ isOpen: false }))
        navigate(ROUTES.MYPAGE_BUY)  
      },
      text: MESSAGES.MYPAGE.BUY.COMPLETE_DELETE,
    })
  )
  console.log('deleted')    
}


  return (
    <StyledProductCardBuy>
      <div className="cardCon">
        <div className="logoTitle">
<<<<<<< HEAD:src/components/common/ProductCardBuy.tsx
          <img className="bankLogo" src={item.companyName && getBankLogo(item.companyName)} alt={item.companyName} />          
          <h2 className="bankTitle">{item.companyName}</h2>          
        </div>
        <div className='cancelBuy'>
          <Button onClick={handleCancelClick} 
            width="30%"
            height="30px"
            marginTop="10px" 
          >
            신청 취소하기
          </Button>
        </div>
        
        <p className="productName">{item.productName}</p>
=======
          <img className="bankLogo" src={bankLogo} alt={bankTitle} />
          <h2 className="bankTitle">{bankTitle}</h2>
        </div>
        <div className="cancelBuy">
          <Button width="30%" height="30px" marginTop="10px">
            신청 취소하기
          </Button>
        </div>

        <p className="productName">{productName}</p>
>>>>>>> f374c55ef3419bb118d8b372fb0fe01a0fa34405:src/ProductCardBuy.tsx
        <div className="textBox">
          <p>
            대출종류<span>{item.productTypeName}</span>
          </p>
          <p>
            평균금리<span>{item.interestRateAvg}</span>
          </p>
          <p>
            금리구분<span>{item.interestType}</span>
          </p>
        </div>
      </div>
    </StyledProductCardBuy>
  );
};

export default ProductCardBuy;

const StyledProductCardBuy = styled.li`
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

    .cancelBuy button {
      position: absolute;
      right: 15px;
      top: 15px;
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
