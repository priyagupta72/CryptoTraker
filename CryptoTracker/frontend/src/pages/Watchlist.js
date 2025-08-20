// import React, { useEffect } from "react";

// import Cards from "../components/Cards";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import EmptyWatchlist from "../components/EmptyWatchlist";

// const Watchlist = () => {
//   const user = useSelector((store) => store.user);
//   const watchlistData = useSelector((store) => store.watchlist);
//   var navigate = useNavigate();

//   useEffect(() => {
//     if (user === "") {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   return watchlistData.length === 0 ? (
//     <EmptyWatchlist />
//   ) : (
//     <div>
//       {" "}
//       <Cards apiData={watchlistData} />{" "}
//     </div>
//   );
// };

// export default Watchlist;




import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyWatchlist from "../components/EmptyWatchlist";

const Watchlist = () => {
  // Get user from Redux or fallback to localStorage
  const userRedux = useSelector((store) => store.user);
  const user = Object.keys(userRedux).length ? userRedux : JSON.parse(localStorage.getItem("user")) || {};
  const watchlistData = useSelector((store) => store.watchlist);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/");
    }
  }, [user, navigate]);

  return watchlistData.length === 0 ? (
    <EmptyWatchlist />
  ) : (
    <div>
      <Cards apiData={watchlistData} />
    </div>
  );
};

export default Watchlist;

