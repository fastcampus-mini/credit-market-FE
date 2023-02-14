import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { Player } from '@lottiefiles/react-lottie-player';

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
      <div id="panel"></div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  position: relative;
  padding: 50px 0 0 10px;

  .welcome {
    width: 157px;
    position: absolute;
    top: -40px;
  }

  p {
    position: absolute;
    top: 100px;
    left: 35%;
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
  }

  #panel {
    position: absolute;
    left: 0;
    background: ${COLORS.background};
    width: 100%;
    height: 100px;
  }
`;
