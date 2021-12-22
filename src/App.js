import { useState } from "react";
import "./styles.css";
import { Menu } from "./components/Menu";
import { DoubleButton } from "./components/DoubleButton";

export const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const onChangeTextbox = (event) => setText(event.target.value);
  const onClickButton = () => {
    setText("");
    setList([...list, text]);
  };
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <p>highlight the text with mouseover.</p>
      <h2>expand menu with mouseover on button</h2>
      <Menu>Menu00</Menu>

      <h2>show input text</h2>
      <p>double input data.</p>
      <DoubleButton />

      <h2>log of input text</h2>
      <input type="text" value={text} onChange={onChangeTextbox} />
      <button type="button" onClick={onClickButton}>
        記録
      </button>
      <ul>
        {list.map((value, index) => {
          return <li key={value}>{index + ": " + value}</li>;
        })}
      </ul>
    </>
  );
};
