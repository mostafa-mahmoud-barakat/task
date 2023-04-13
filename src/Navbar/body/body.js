import React, { useState, useEffect } from "react";
// import axios from "axios";
const Body = () => {
  const [data, setData] = useState([]);

 

  useEffect(() => {
    fetch("http://3.65.32.166/api/v1/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="ms-5 me-5 bg-dark text-center ps-5 pe-5">
        <h1 className="text-center text-light mb-5">Latest News</h1>
        {data.map((item) => (
          <img
           id="showImage"
            className="rounded"
            src={item.attributes.media_url}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg";
            }}
            style={{
              height: 270,
              marginLeft: 40,
              marginBottom: 20,
              position: "center",
            }}
            alt= " "
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
