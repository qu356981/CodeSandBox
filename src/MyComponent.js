import React from "react";

import Button from "./Button"; //在同一層使用./
import MyButton from "./MyButton";

// **元件檔案名稱需使用大寫
// 1. class ES6 類別元件
// 2. functional 函式元件 (hook)

//所有要return出來的元素,在第一層只能有一個標籤,用空標籤(fragment)標籤把他包起來
//元件可重複被使用

//元件的 props
//元件的 status(狀態)

const MyComponent = () => {
  const [inputValue, setInputValue] = React.useState("123");
  return (
    <>
      <input
        value={inputValue}
        onInput={(e) => {
          // window.alert(e.target.value);
          const newValue = e.target.value;
          setInputValue(newValue);
        }}
      />
      <p>文字輸入框裡面的內容：{inputValue}</p>
      <Button />
      <MyButton
        text={"取消"}
        handleClick={() => {
          window.alert("取消");
        }}
      />
      {/* children props寫法 */}
      <MyButton>取消</MyButton>
      <MyButton
        text={"好的"}
        handleClick={() => {
          window.alert("好的");
        }}
      />
      {/* children props寫法 */}
      <MyButton>好的</MyButton>
    </>
  );
};

export default MyComponent; //Es6的寫法,讓別的檔案引入需要使用export
