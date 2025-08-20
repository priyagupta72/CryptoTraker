// import React, { useEffect, useState } from "react";
// import Cards from "../components/Cards";
// import { useRef } from "react";
// import DummyUi from "../components/DummyUi";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const Top10 = () => {
//   const [data, setData] = useState([]);

//   const Data = useRef();

//   const user = useSelector((store) => store.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user === "") {
//       navigate("/");
//     } else {
//       const url = "https://api.coingecko.com/api/v3/search/trending/";
//       fetch(url)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           setData(data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [user, navigate]);

//   return data.length === 0 ? (
//     <DummyUi />
//   ) : (
//     <div className="w-full container mx-auto my-5">
//       <h1 ref={Data}></h1> 
//       <Cards apiData={data.coins} checker={"top10"} />
//     </div>
//   );
// };

// export default Top10;

import React, { useEffect, useState, useRef } from "react";
import Cards from "../components/Cards";
import DummyUi from "../components/DummyUi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Top10 = () => {
  const [data, setData] = useState([]);
  const Data = useRef();

  const userRedux = useSelector((store) => store.user);
  const user = Object.keys(userRedux).length ? userRedux : JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/");
      return;
    }

    const url = "https://api.coingecko.com/api/v3/search/trending/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [user, navigate]);

  return data.length === 0 ? (
    <DummyUi />
  ) : (
    <div className="w-full container mx-auto my-5">
      <h1 ref={Data}></h1>
      <Cards apiData={data.coins} checker={"top10"} />
    </div>
  );
};

export default Top10;

