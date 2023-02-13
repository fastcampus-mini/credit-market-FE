import styled from '@emotion/styled';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineTwitter, AiFillBell } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import colors from '@/styles/colors';
import { ROUTES } from '@/constants/routes';

const Navbar = () => {
  const location = useLocation();
  const bubblePosition = (path: string, id: number, position: number, color: string) => {
    return location.pathname === path && move(id, position, color);
  };

  const move = (id: number, position: number, color: string) => {
    var tl = gsap.timeline();
    gsap.config({
      nullTargetWarn: false,
    });
    tl.to('#bgBubble', { duration: 0.15, bottom: '-30px', ease: 'ease-out' }, 0)
      .to('#bubble1', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble2', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble3', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('.icon', { duration: 0.05, opacity: 0, ease: 'ease-out' }, 0)
      .to('#bgBubble', { duration: 0.2, left: `${position}px`, ease: 'ease-in-out' }, 0.1)
      .to('#bgBubble', { duration: 0.15, bottom: '-50px', ease: 'ease-out' }, '-=0.2')
      .to(
        `#bubble${id}`,
        {
          duration: 0.15,
          y: '0%',
          opacity: 1,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          ease: 'ease-out',
        },
        '-=0.1',
      )
      .to(
        `#bubble${id}> span`,
        { duration: 0.15, y: '0%', opacity: 0.7, ease: 'ease-out' },
        '-=0.1',
      )
      .to('#navbarContainer', { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0)
      .to('#bg', { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0)
      .to('#bgBubble', { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0);
  };

  return (
    <NavbarContainerStyle>
      <div id="navbarContainer">
        <div id="navbar">
          <div id="bubbleWrapper">
            <div id="bubble1" className="bubble">
              <span className="icon">
                <AiFillHome />
              </span>
            </div>
            <div id="bubble2" className="bubble">
              <span className="icon">
                <BsFillCartFill />
              </span>
            </div>
            <div id="bubble3" className="bubble">
              <span className="icon">
                <FaUserAlt />
              </span>
            </div>
          </div>
          <div id="menuWrapper">
            <div
              id="menu1"
              className="menuElement"
              onClick={() => move(1, 105, colors.loginBackground)}
            >
              <Link to="/">
                <>
                  <AiFillHome />
                  {bubblePosition(ROUTES.HOME, 1, 105, colors.loginBackground)}
                </>
              </Link>
            </div>
            <div id="menu2" className="menuElement" onClick={() => move(2, 235, colors.background)}>
              <Link to="/cart">
                <>
                  <BsFillCartFill />
                  {bubblePosition(ROUTES.CART, 2, 235, colors.background)}
                </>
              </Link>
            </div>
            <div id="menu3" className="menuElement" onClick={() => move(3, 365, colors.background)}>
              <Link to="/mypage">
                <>
                  <FaUserAlt />
                  {bubblePosition(ROUTES.MYPAGE, 3, 365, colors.background)}
                </>
              </Link>
            </div>
          </div>
        </div>
        <div id="bgWrapper">
          <div id="bg"></div>
          <div id="bgBubble"></div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </NavbarContainerStyle>
  );
};

export default Navbar;

const NavbarContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  #navbar {
    width: 100%;
    height: 60px;
    background-color: ${colors.white};
    position: absolute;
    bottom: 0;
  }

  #bubbleWrapper {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100%;
    bottom: 25px;
  }

  .bubble {
    background-color: ${colors.white};
    width: 60px;
    height: 60px;
    bottom: 85px;
    border-radius: 50%;
    z-index: 1;
    transform: translateY(120%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    opacity: 0;
  }

  #bubble1 {
    transform: translateY(0%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  #bubble1 > span {
    opacity: 0.7;
  }

  #bgWrapper {
    filter: url(#goo);
    width: 120%;
    height: 100%;
    margin-left: -10%;
    position: absolute;
    bottom: 58px;
  }

  #bg {
    background-color: ${colors.loginBackground};
    height: 100%;
  }

  #bgBubble {
    position: absolute;
    background-color: ${colors.loginBackground};
    width: 75px;
    height: 75px;
    border-radius: 50%;
    bottom: -50px;
    left: 105px;
    transform: translateX(-50%);
  }

  #menuWrapper {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .menuElement {
    opacity: 0.4;
    transform: translateY(100%);
    cursor: pointer;
  }
  .menuElement:hover {
    opacity: 0.5;
  }

  #contentWrapper {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #contentWrapper h2 {
    color: #fff;
    font-family: sans-serif;
    font-weight: 400;
  }

  .content {
    display: none;
    opacity: 0;
  }
`;
