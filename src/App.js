import { useState } from "react";
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
    setSliderIndex((sliderIndex + 2) % 3);
  };
  const onClickRight = () => {
    setSliderIndex((sliderIndex + 1) % 3);
  };

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
      <div className="slider-wrap">
        <ul className="slider">
          <li id="slider-item">
            <div>
              <h3>AAA</h3>
            </div>
          </li>
          <li>
            <div>
              <h3>BBB</h3>
            </div>
          </li>
          <li>
            <div>
              <h3>CCC</h3>
            </div>
          </li>
          <li>
            <div>
              <h3>DDD</h3>
            </div>
          </li>
          <li>
            <div>
              <h3>EEE</h3>
            </div>
          </li>
          <li>
            <div>
              <h3>FFF</h3>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
