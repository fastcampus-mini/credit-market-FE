import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '../store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { setModal } from '@/store/modalSlice';
import styled from '@emotion/styled';
import ProductCard from '../components/Product/ProductCard';
import { IProduct } from '@/interfaces/product';
import { getBuyList }  from '../apis/buy'
import { IBuy } from '@/interfaces/buy'

interface Props {
  data: IProduct
  isBuy?: boolean
}

const MyBuy = () => {
  const dispatch = useDispatch();
  const [myBuyList, setBuyList] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function data() {
      try {
        dispatch(showLoading());
        const data = await getBuyList(1);
        setBuyList(data);
      } catch (error) {
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.MYPAGE.BUY.ERROR_GET,
        });
      } finally {
        dispatch(hideLoading());
      }
    }
    data();
  }, []);

  const handleCancelClick = () => {
    return dispatch(
      setModal({
        isOpen: true,
        onClickOk: handleDeleteFromBuy,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.MYPAGE.BUY.CHECK_DELETE,
      }),
    );
  };

  const handleDeleteFromBuy = () => {
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: () => {
          dispatch(setModal({ isOpen: false }));
          navigate(ROUTES.MYPAGE_BUY);
        },
        text: MESSAGES.MYPAGE.BUY.COMPLETE_DELETE,
      }),
    );
    console.log('deleted');
  };

  return (
    <MyBuyContainer>
      <MyBuyHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MyBuyHeader>
      <MyBuyWrap>
        {myBuyList.map((item) => {
          return (
            <ProductCard 
              key={item.orderId} 
              data={item} 
              // onClick={handleCancelClick}
              isBuy={true} 
            />
          )
        })}
      </MyBuyWrap>
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
