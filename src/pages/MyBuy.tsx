import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
<<<<<<< HEAD
import ProductCardBuy from '@/components/common/ProductCardBuy';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '../store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IBuy } from '@/interfaces/buy';
import { setModal } from '@/store/modalSlice';
=======
import { ROUTES } from '@/constants/routes';
import ProductCardBuy from '@/ProductCardBuy';
>>>>>>> f374c55ef3419bb118d8b372fb0fe01a0fa34405
import styled from '@emotion/styled';


const MyBuy = () => {
  const dispatch = useDispatch()
  const [myBuyList, setBuyList] = useState<IBuy[]>([])
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  const datas: any[] = [
    { id: '1', title: '무직자 신용대출', bank: '국민', interestRate: 5.04 },
    { id: '2', title: '고용주 신용대출', bank: '기업', interestRate: 5.04 },
    { id: '3', title: '고양이 신용대출', bank: '수협', interestRate: 5.04 },
    { id: '4', title: '고용주 신용대출', bank: '기업', interestRate: 5.04 },
    { id: '5', title: '주부 신용대출', bank: '국민', interestRate: 5.04 },
  ];
>>>>>>> f374c55ef3419bb118d8b372fb0fe01a0fa34405

  return (
    <MyBuyContainer>
      <MyBuyHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MyBuyHeader>
      <MyBuyWrap>
<<<<<<< HEAD
        {myBuyList.map((item) => {
          return (
            <ProductCardBuy
              key={item.id}
              item={item}
              onClick={handleCancelClick}
            />
          )
      })}</MyBuyWrap>
=======
        {datas.map((data) => {
          return (
            <ProductCardBuy
              key={data.id}
              data={data}
              bankLogo={getBankLogo(data.bank)}
              bankTitle={`${data.bank}은행`}
              productName={data.title}
              loanTitle="대출"
              rateAverage="3.4%"
              rateSort="대출"
              isFavor={false}
            />
          );
        })}
      </MyBuyWrap>
>>>>>>> f374c55ef3419bb118d8b372fb0fe01a0fa34405
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
