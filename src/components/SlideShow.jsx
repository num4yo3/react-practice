import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles.css";

export const SlideShow = () => {
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
      <button type="button" onClick={onClickLeft}>
        Left
      </button>
      <button type="button" onClick={onClickRight}>
        Right
      </button>

      <TransitionGroup className="wrap">
        <CSSTransition key={sliderIndex} className="main slide" timeout={1000}>
          <div>{sliderImage[sliderIndex]}</div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
