import React from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { Player } from '@lottiefiles/react-lottie-player';
import Input from '@/components/common/Input';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <p>
        방문자님,
        <br />
        오늘도 즐거운 하루 보내세요!
      </p>

      <div className="panel">
        <Link to="/search">
          <Input
            inputType="text"
            width="calc(100% - 10px)"
            placeholder="검색어를 임력해 주세요."
            classType="text-search"
          />
        </Link>
        <ul className="productsArea">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus nemo
            similique facere reiciendis id earum dicta repudiandae commodi? Quibusdam, nesciunt
            veritatis ducimus dolorum, quidem perspiciatis quasi aspernatur corporis optio
            accusantium cupiditate dolorem ex facere animi exercitationem, earum beatae nostrum
            provident adipisci incidunt! Velit, exercitationem consectetur itaque repellat quod
            vitae debitis harum ea est distinctio soluta fugiat dolor commodi quas minus. Unde enim
            maxime reprehenderit aut ducimus eum assumenda hic nostrum dolorum excepturi possimus
            expedita velit quod ratione illum rem repudiandae, pariatur voluptates molestias tempore
            aspernatur debitis quisquam explicabo dolore. Earum natus voluptatibus dolores veritatis
            inventore dolorum nam, quasi suscipit.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus nemo
            similique facere reiciendis id earum dicta repudiandae commodi? Quibusdam, nesciunt
            veritatis ducimus dolorum, quidem perspiciatis quasi aspernatur corporis optio
            accusantium cupiditate dolorem ex facere animi exercitationem, earum beatae nostrum
            provident adipisci incidunt! Velit, exercitationem consectetur itaque repellat quod
            vitae debitis harum ea est distinctio soluta fugiat dolor commodi quas minus. Unde enim
            maxime reprehenderit aut ducimus eum assumenda hic nostrum dolorum excepturi possimus
            expedita velit quod ratione illum rem repudiandae, pariatur voluptates molestias tempore
            aspernatur debitis quisquam explicabo dolore. Earum natus voluptatibus dolores veritatis
            inventore dolorum nam, quasi suscipit.
          </li>
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

  p {
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

  .panel {
    position: absolute;
    width: 100%;
    height: calc(100% - 182px);
    left: 0;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.5);
    background: ${COLORS.background};
    padding: 20px 0 0 10px;
    // overflow-y: auto;

    .productsArea {
      height: calc(100% - 79px);
      margin-top: 10px;
      padding-right: 10px;
      // overflow-y: auto;
    }
  }
`;
