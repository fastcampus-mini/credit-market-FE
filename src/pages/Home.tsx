import styled from '@emotion/styled';
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <HomeStyle>
      <Player
        autoplay
        src="https://lottie.host/a8eaabb9-8b3e-4593-a292-691432650b13/erB13ry72Q.json"
        style={{ margin: 0 }}
      ></Player>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  padding: 20px 10px;
  position: relative;
  z-index: 1;

  #lottie {
    width: 100px;
  }
`;
