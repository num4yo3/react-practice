import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Root = styled.div`
  button {
    width: 100px;
    height: 30px;
  }
  .wrap {
    position: relative;
    display: flex;
    width: 180px;
    height: 100px;
    outline: solid 1px black;
    overflow: hidden;
  }
  .main {
    position: absolute;
    width: 200px;
    height: 100px;
    outline: solid 1px red;
    text-align: center;
  }
  .slide-enter {
    color: red;
    transform: translateX(100%);
  }
  .slide-enter-active {
    color: red;
    transform: translateX(0%);
    transition: transform 3000ms ease-in-out;
  }
  .slide-exit {
    color: red;
    transform: translateX(0%);
  }
  .slide-exit-active {
    color: red;
    transform: translateX(-100%);
    transition: transform 3000ms ease-in-out;
  }
`;

export const SlideShow = () => {
  const [slideLR, setSlideLR] = useState(true);
  const [sliderIndex, setSliderIndex] = useState(0);
  const onClickLeft = () => {
    setSlideLR(true);
    setSliderIndex((sliderIndex + 3) % 4);
  };
  const onClickRight = () => {
    setSlideLR(false);
    setSliderIndex((sliderIndex + 1) % 4);
  };
  console.log(slideLR);
  const sliderImage = ["AAA", "BBB", "CCC", "DDD"];

  return (
    <Root slideDirection={slideLR}>
      <button onClick={onClickLeft}>Left</button>
      <button onClick={onClickRight}>Right</button>
      <div className="wrap">
        <TransitionGroup>
          {/* USE className"s" for CSSTransition */}
          <CSSTransition key={sliderIndex} classNames="slide" timeout={3000}>
            <div className="main">{sliderImage[sliderIndex]}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Root>
  );
};
