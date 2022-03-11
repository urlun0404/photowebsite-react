import React from "react";

const Picture = ({ photo }) => {
  return (
    <div className="picture">
      <p>{photo.photographer}</p>
      <div className="imageContainer">
        <img src={photo.src.large} alt="" />
      </div>
      <p>
        Download image:{" "}
        <a target="_blank" href={photo.src.large}>
          Here
        </a>
      </p>
    </div>
  );
};

export default Picture;
