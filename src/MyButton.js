import React from "react";

//要使用的為變數時需要使要用大括號包起來
//每個函式元件都有個props,透過props可以拿到外部的屬性
const MyButton = (props) => {
  const text = props.text; //這個會取到外部傳入的text
  const text1 = props.children;
  return <button onClick={props.handleClick}>{text1}</button>;
};

export default MyButton;
