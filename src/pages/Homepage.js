import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [photos, setPhotos] = useState(null);
  let [pages, setPages] = useState(1);
  let [currSearch, setCurrSearch] = useState("");
  const auth = "";
  const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  // fetch data from pexels api
  const search = async (url) => {
    setPages(1);
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await data.json();
    setPhotos(parsedData.photos);
    setCurrSearch(input);
  };

  // fetch data from clicking Load More button
  const loadMorePictures = async () => {
    setPages(++pages);
    let url =
      currSearch === ""
        ? `https://api.pexels.com/v1/curated?page=${pages}&per_page=15`
        : `https://api.pexels.com/v1/search?query=${currSearch}&page=${pages}&per_page=15`;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await data.json();
    setPhotos([...photos, ...parsedData.photos]);
  };

  // fetch data when the page loads up
  useEffect(() => {
    search(initURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => (input !== "" ? search(searchURL) : null)}
        setInput={setInput}
      />
      <div className="pictures">
        {photos && photos.map((photo) => <Picture photo={photo} />)}
      </div>
      <div className="morePictures">
        <button onClick={loadMorePictures}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
