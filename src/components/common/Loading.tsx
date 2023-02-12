import styled from '@emotion/styled';
import React from 'react';

const Loading = () => {
  return (
    <LoadingAni>
      <iframe src="https://embed.lottiefiles.com/animation/97952"></iframe>
    </LoadingAni>
  );
};

export default Loading;

const LoadingAni = styled.div`
  border: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .container:hover .attribution {
      display: none;
    }
  }
`;
