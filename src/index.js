import React from "react";
import ReactDOM from "react-dom";

//<input id="input" type="number" readonly class="input" for="input" style="color: red;border: 1px solid green;border-radius: 4px;">
//<input oninput="myFunction()">

//<button>點我</button>

//<ul>
//  <li><p><span>第一點</span></p></li>
//  <li>第二點</li>
//</ul>

//有三個參數,
//第一個放入希望建立的標籤元素名称(input,button,div,...)
//第二個放入屬性名稱與屬性質的物件,注意命名要用駝峰式命名(camel-case),class與for為保留字(有其他用途,類別及迴圈)在react中需取其他名稱使用
//第三個參數,希望放入的子元素,有兩個以上的子元素就需要使用陣列去包覆

//JSX
//沒有子元素要自己結尾,在大於前加"/"
//屬性名稱與屬性質要用{}包起來,可斷行排版

const e = React.createElement("input", {
  className: "input",
  type: "number",
  style: {
    backgroundColor: "gray"
  },
  onInput: () => {
    window.alert("Hello!");
  }
});

const e2 = (
  <input
    className={"input"}
    tpye={"number"}
    style={{ backgroundColor: "gray" }}
    onInput={() => {
      window.alert("HAHA!");
    }}
  />
);

//<div>
//  <h1>網頁前端框架React超入門</h1>
//  <p>
//    想學習網頁前端框架不能錯過的第一堂課:
//    <b>
//      超詳細
//   </b>
//   的程式碼解說以及
//    <b>
//      超豐富大量
//   </b>
//    的實例練習
//  </p>
//  <ol>
//    <li>React 元素</li>
//    <li>JSX 語法</li>
//    <li>React 元件</li>
//  </ol>
//</div>

const rootElemnt = document.getElementById("root");

ReactDOM.render(e2, rootElemnt);
