import React, { useState, useEffect } from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { Player } from '@lottiefiles/react-lottie-player';
import Input from '@/components/common/Input';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/common/ProductCard';
import { getBankLogo } from '@/utils/bankLogo';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';

interface Prop {
  id: string;
  title: string;
  bank: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Prop[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        const data: Prop[] = [
          { id: '1', title: '직장인 신용대출', bank: '우리' },
          { id: '2', title: '주부 신용대출', bank: '국민' },
          { id: '3', title: '고양이 신용대출', bank: '신한' },
          { id: '4', title: '주부 신용대출', bank: '국민' },
          { id: '5', title: '직장인 신용대출', bank: '우리' },
          { id: '6', title: '주부 신용대출', bank: '신한' },
          { id: '7', title: '고양이 신용대출', bank: '국민' },
          { id: '8', title: '대학생 신용대출', bank: '제주' },
        ];
        setProducts(data);
      } catch (error) {
        alert(MESSAGES.ERROR_PRODUCT.GET_DETAIL);
      } finally {
        dispatch(hideLoading());
      }
    }
    getProducts();
  }, []);

  return (
    <StyledHome>
      <Player
        className="welcome"
        autoplay
        src="https://lottie.host/a8eaabb9-8b3e-4593-a292-691432650b13/erB13ry72Q.json"
        style={{ margin: 0 }}
      ></Player>
      <div className="bannerBg">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_kK73MQ.json"
        ></Player>
      </div>
      <p className="welcomeText">
        방문자님,
        <br />
        오늘도 즐거운 하루 보내세요!
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              bankLogo={getBankLogo(product.bank)}
              bankTitle={`${product.bank}은행`}
              productName={product.title}
              loanTitle="대출"
              rateAverage="3.4%"
              rateSort="대출"
              Favor={false}
            />
          ))}
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
    top: -40px;
  }

  p.welcomeText {
    position: absolute;
    top: 100px;
    left: 32%;
    transform: translate(-50%, -50%);
    color: ${COLORS.white};
    font-size: 13px;
    line-height: 20px;
  }

  .bannerBg {
    display: flex;
    justify-content: end;
    margin-top: 30px;

    #lottie {
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
