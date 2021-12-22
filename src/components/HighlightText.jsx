import React, { useState } from "react";
import "../styles.css";

const styleButton = {
  width: "100px",
  height: "auto",
  textAlign: "center",
  listStyleType: "none",
  padding: "0px",
  color: "black",
  border: "solid 1px black"
};
const sMenuItem = {
  outline: "solid 1px black",
  color: "red"
};

const menuList = [
  { id: "menu01", link: "link01" },
  { id: "menu02", link: "link02" },
  { id: "menu03", link: "link03" }
];

export const HighlightText = () => {
  const [highlight, setHighlight] = useState(false);
  return (
    <ul
      style={styleButton}
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      Menu
      {highlight && (
        <>
          {menuList.map((list) => {
            return (
              <li key={list.id} style={sMenuItem}>
                <a href={list.link}>
                  <div>{list.id}</div>
                </a>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};
