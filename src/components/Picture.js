const Picture = ({ photo }) => {
  const download = (url) => {
    fetch(url, {
      method: "GET",
      headers: {},
    }).then((response) => {
      response
        .arrayBuffer()
        .then((buffer) => {
          const urlParser = new URL(url);
          const fileName = urlParser.pathname.split("/").pop();
          const blobURL = URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = blobURL;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="picture">
      <p>{photo.photographer}</p>
      <div className="imageContainer">
        <img src={photo.src.large} alt="" />
      </div>
      <p>
        Download image:{" "}
        <a
          target="_blank"
          href={photo.src.original}
          onClick={(e) => download(e.target.href)}
          download
        >
          Here
        </a>
      </p>
    </div>
  );
};

export default Picture;
