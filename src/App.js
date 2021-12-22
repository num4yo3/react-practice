import "./styles.css";
import { Menu } from "./components/Menu";
import { DoubleButton } from "./components/DoubleButton";

export const App = () => {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <p>highlight the text with mouseover.</p>
      <h2>show text with mouseover on button</h2>
      <Menu>Menu00</Menu>

      <h2>show input text</h2>
      <p>double input data.</p>
      <DoubleButton />
    </>
  );
};
