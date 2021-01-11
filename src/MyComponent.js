import React from "react";

import Button from "./Button"; //在同一層使用./

// **元件檔案名稱需使用大寫
// 1. class ES6 類別元件
// 2. functional 函式元件 (hook)

//所有要return出來的元素,在第一層只能有一個標籤,用空標籤(fragment)標籤把他包起來
//元件可重複被使用
const MyComponent = () => {
  return (
    <>
      <input /> <Button />
    </>
  );
};

export default MyComponent; //Es6的寫法,讓別的檔案引入需要使用export
