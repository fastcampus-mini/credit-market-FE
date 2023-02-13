import { getMypageItemList } from '@/apis/mypage';
import { ERROR_MESSAGES } from '@/constants/messages';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Mypage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getMypageItemList();
      } catch (error) {
        alert(ERROR_MESSAGES.ERROR_MYPAGE);
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  return <MypageStyle>Mypage</MypageStyle>;
};

export default Mypage;

const MypageStyle = styled.div``;
