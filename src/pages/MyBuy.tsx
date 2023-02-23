import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import ProductCardBuy from '@/components/common/ProductCardBuy';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '../store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IBuy } from '@/interfaces/buy';
import { setModal } from '@/store/modalSlice';
import styled from '@emotion/styled';


const MyBuy = () => {
  const dispatch = useDispatch()
  const [myBuyList, setBuyList] = useState<IBuy[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    async function getBuyList() {
      try {
        dispatch(showLoading());
        const item: IBuy[] = [
          { id: '1', productName: '직장인 신용대출', companyName: '우리', favorite: false, productTypeName: '대출', interestRateAvg: '5.04%', interestType: '대출'},
          { id: '2', productName: '주부 신용대출', companyName: '국민', favorite: false, productTypeName: '대출', interestRateAvg: '4.29%', interestType: '대출'},
          { id: '3', productName: '무직자 신용대출', companyName: '신한', favorite: false, productTypeName: '대출', interestRateAvg: '4.98%', interestType: '대출'},
          { id: '4', productName: '고용주 신용대출', companyName: '기업', favorite: false, productTypeName: '대출', interestRateAvg: '3.98%', interestType: '대출'},
          { id: '5', productName: '고양이 신용대출', companyName: '수협', favorite: false, productTypeName: '대출', interestRateAvg: '4.75%', interestType: '대출'},
        ]
        setBuyList(item);
      } catch (error) {
        alert(MESSAGES.MYPAGE.BUY.ERROR_GET);
      } finally {
        dispatch(hideLoading());
      }
    }
    getBuyList();
  }, []);

  const handleDeleteFromBuy = () => {
    dispatch(
      setModal({ 
        isOpen: true,
        onClickOk: handleDeleteFromBuy,
        text: MESSAGES.MYPAGE.BUY.COMPLETE_DELETE,
      })
    )
    console.log('deleted')
    navigate(ROUTES.MYPAGE_BUY)    
  }

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

  return (
    <MyBuyContainer>
      <MyBuyHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MyBuyHeader>
      <MyBuyWrap>
        {myBuyList.map((item) => {
          return (
            <ProductCardBuy
              key={item.id}
              item={item}
              onClick={handleCancelClick}
            />
          )
      })}</MyBuyWrap>
    </MyBuyContainer>
  );
};

export default MyBuy;

const MyBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 10px;
`;

const MyBuyHeader = styled.div`
  display: flex;
`;

const MyBuyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  overflow-y: auto;
  height: 100%;
  gap: 5px;
  li {
    list-style-type: none;
  }
`;
