import React, { useState } from "react";
// useStateはexport const func(){}の中で使う
export const DoubleButton = () => {
  const [text, setText] = useState("");
  const [doubled, setDoubled] = useState(0);

  const onChangeTextbox = (event) => setText(event.target.value);

  const onClickButton = () => {
    setText("");
    setDoubled(text * 2);
  };
  return (
    <>
      <input
        type="text"
        placeholder="数字を入力"
        value={text}
        onChange={onChangeTextbox}
      />
      <button type="button" onClick={onClickButton} disabled={!isFinite(text)}>
        計算
      </button>
      {isFinite(text) || (
        <p style={{ fontSize: "8px", color: "red" }}>数値を入力してください</p>
      )}
      <p>result: {doubled}</p>
    </>
  );
};
