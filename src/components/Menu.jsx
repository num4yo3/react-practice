import React, { useState } from "react";
import "../styles.css";

const sMenu = {
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

export const Menu = ({ children }) => {
  const [highlight, setHighlight] = useState(false);
  return (
    <ul
      style={sMenu}
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      {children}
      {highlight && (
        <>
          {menuList.map((list) => {
            return (
              <li key={list.id}>
                <a href={list.link} style={{ textDecoration: "none" }}>
                  <div style={sMenuItem}>{list.id}</div>
                </a>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};
