import "./styles.css";
import { HighlightText } from "./components/HighlightText";

export const App = () => {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <p>highlight the text with mouseover.</p>
      <p>show text with mouseover on button</p>
      <HighlightText />
    </>
  );
};
