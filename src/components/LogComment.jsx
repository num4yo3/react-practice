import { useState } from "react";

export const LogComment = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const onChangeTextbox = (event) => setText(event.target.value);
  const onClickButton = () => {
    setText("");
    setList([...list, text]);
  };
  return (
    <>
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
