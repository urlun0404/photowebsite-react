import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [photos, setPhotos] = useState(null);
  const auth = "";
  const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  // fetch data from pexels api
  const search = async (url) => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await data.json();
    setPhotos(parsedData.photos);
  };

  // fetch data when the page loads up
  useEffect(() => {
    search(initURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {photos && photos.map((photo) => <Picture photo={photo} />)}
      </div>
    </div>
  );
};

export default Homepage;
