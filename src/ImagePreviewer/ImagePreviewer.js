import React from "react";

import "./ImagePreviewer.css";

const ImagePreviewer = () => {
  const [url, setUrl] = React.useState();
  return (
    <label className="wrapper" htmlFor="input">
      {url ? (
        <img src={url} alt="" width="400" height="200" />
      ) : (
        <div className="description">請選擇圖片</div>
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="input"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const objectUrl = URL.createObjectURL(file);
            setUrl(objectUrl);
          }
        }}
      />
    </label>
  );
};

export default ImagePreviewer;
