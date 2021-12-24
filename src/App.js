import { useState } from "react";
import "./styles.css";
import { Menu } from "./components/Menu";
import { DoubleButton } from "./components/DoubleButton";
import { LogComment } from "./components/LogComment";
import { SlideShow } from "./components/SlideShow";

export const App = () => {
  const [scrollheight, setScrollheight] = useState(0);
  const scrollAction = () => {
    setScrollheight(window.scrollY);
  };
  window.addEventListener("scroll", scrollAction, {
    capture: false,
    passive: true
  });

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
      <SlideShow />
    </>
  );
};
