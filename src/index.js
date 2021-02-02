import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent"; //使用別的元件都需要先import進來
import ImagePreviewer from "./ImagePreviewer/ImagePreviewer.js";
import Counter from "./Counter/Counter.js";
import Example from "./Example/Example.js";

ReactDOM.render(<Example />, document.getElementById("root"));
