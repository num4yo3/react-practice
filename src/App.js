import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";
import { Menu } from "./components/Menu";
import { DoubleButton } from "./components/DoubleButton";
import { LogComment } from "./components/LogComment";

export const App = () => {
  const [scrollheight, setScrollheight] = useState(0);
  const scrollAction = () => {
    setScrollheight(window.scrollY);
  };
  window.addEventListener("scroll", scrollAction, {
    capture: false,
    passive: true
  });
  const [sliderIndex, setSliderIndex] = useState(0);
  const onClickLeft = () => {
    setSliderIndex((sliderIndex + 3) % 4);
  };
  const onClickRight = () => {
    setSliderIndex((sliderIndex + 1) % 4);
  };
  const sliderImage = ["AAA", "BBB", "CCC", "DDD"];

  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <p>I will display components having various functions.</p>
      <h2>expand menu with mouseover on button</h2>
      <Menu>Menu00</Menu>
      <h2>show input text</h2>
      <p>double input data.</p>
      <DoubleButton />
      <h2> get the position of scroll bar</h2>
      <div>scroll height: {scrollheight}px</div>
      <h2>log of input text</h2>
      <LogComment />

      <h2>slideshow</h2>
      <button type="button" onClick={onClickLeft}>
        Left
      </button>
      <button type="button" onClick={onClickRight}>
        Right
      </button>
      <div>
        <TransitionGroup className="slider-wrap">
          <CSSTransition key={sliderIndex} className="slide" timeout={1500}>
            <div className="main">{sliderImage[sliderIndex]}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};
