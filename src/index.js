import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./MyComponent"; //使用別的元件都需要先import進來
import ImagePreviewer from "./ImagePreviewer/ImagePreviewer.js";

ReactDOM.render(<ImagePreviewer />, document.getElementById("root"));
