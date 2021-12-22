import "./styles.css";
import { useState } from "react";
import { Menu } from "./components/Menu";

export const App = () => {
  const [text, setText] = useState("");
  const [doubled, setDoubled] = useState(0);

  const onChangeTextbox = (event) => setText(event.target.value);
  const onClickButton = () => {
    setText("");
    setDoubled(text * 2);
  };
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <p>highlight the text with mouseover.</p>
      <h2>show text with mouseover on button</h2>
      <Menu>Menu00</Menu>

      <h2>show input text</h2>
      <p>double input data.</p>
      <input
        type="text"
        placeholder="数字を入力"
        value={text}
        onChange={onChangeTextbox}
      />
      <button type="button" onClick={onClickButton} disabled={!isFinite(text)}>
        計算
      </button>
      <p>result: {doubled}</p>
    </>
  );
};
