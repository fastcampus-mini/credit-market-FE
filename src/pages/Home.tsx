import React, { useState, useEffect } from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import Input from '@/components/common/Input';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/Product/ProductCard';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IProduct } from '@/interfaces/product';
import Lottie from 'lottie-react';
import WelcomeLottie from '@/lotties/welcome.json';
import BackgroundLottie from '@/lotties/background.json';
import { getRandomSearchList, getRecommentList } from '@/apis/product';
import { useCookies } from 'react-cookie';

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        if (cookies.userName) {
          setProducts(await getRecommentList());
          console.log(await getRecommentList());
        } else {
          setProducts(await getRandomSearchList());
          console.log(await getRandomSearchList());
        }
      } catch (error) {
        alert(MESSAGES.PRODUCT.ERROR_GET_PRODUCT);
      } finally {
        dispatch(hideLoading());
      }
    }
    getProducts();
  }, [cookies]);

  return (
    <StyledHome>
      <Lottie animationData={WelcomeLottie} loop={false} className="welcome" />
      <div className="bannerBg">
        <Lottie animationData={BackgroundLottie} loop={true} className="background" />
      </div>
      <p className="welcomeText">
        {cookies.userName ? `${cookies.userName}님을 위한,` : `방문자님,`}
        <br />
        {cookies.userName ? ' 맞춤형 추천 상품을 준비해 놓았어요!' : '오늘도 행복한 하루 보내세요!'}
      </p>
      <div id="panel">
        <Link to="/search">
          <Input
            inputType="text"
            width="calc(100% - 10px)"
            placeholder="검색어를 임력해 주세요."
            classType="text-search"
          />
        </Link>
        <ul className="productsArea">
          {products.length > 0 &&
            products.map((product) => <ProductCard key={product.productId} data={product} />)}
        </ul>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  position: relative;
  height: 100%;
  padding: 50px 0 0 10px;

  .welcome {
    width: 157px;
    position: absolute;
    top: -30px;
    left: 0;
  }

  p.welcomeText {
    position: absolute;
    width: 100%;
    top: 110px;
    left: 230px;
    transform: translate(-50%, -50%);
    color: ${COLORS.white};
    font-family: 'GmarketSansMedium';
    line-height: 27px;
    font-size: 15px;
  }

  .bannerBg {
    display: flex;
    justify-content: end;
    margin-top: 30px;

    .background {
      width: 230px;
    }
    position: relative;
  }

  #panel {
    position: absolute;
    width: 100%;
    height: calc(100% - 182px);
    left: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.5);
    background: ${COLORS.background};
    padding: 20px 0 0 10px;
    overflow-y: auto;

    .productsArea {
      height: calc(100% - 79px);
      margin-top: 10px;
      padding-right: 10px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
