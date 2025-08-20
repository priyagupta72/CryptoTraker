// import { useState, useEffect } from "react";
// import Cards from "../components/Cards";
// import DummyUi from "../components/DummyUi";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// function Trending() {
//   const [data, setData] = useState([]);

//   const user = useSelector((store) => store.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user === "") {
//       navigate("/");
//       return;
//     } else {
//       const url =
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
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

//   if (data.length === 0) {
//     return <DummyUi />;
//   } else {
//     return (
//       <div className="container w-full mx-auto my-5">
//         <Cards apiData={data} />
//       </div>
//     );
//   }
// }

// export default Trending;



import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import DummyUi from "../components/DummyUi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Trending() {
  const [data, setData] = useState([]);
  const userRedux = useSelector((store) => store.user);
  const user = Object.keys(userRedux).length ? userRedux : JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/");
      return;
    }

    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [user, navigate]);

  return data.length === 0 ? (
    <DummyUi />
  ) : (
    <div className="container w-full mx-auto my-5">
      <Cards apiData={data} />
    </div>
  );
}

export default Trending;
