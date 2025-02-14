// import React from "react";
// import { MdOutlineStarRate } from "react-icons/md";
// import { FaArrowTrendDown } from "react-icons/fa6";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { handleAddcoin, handleremovecoin } from "../store/watchlistSlice";
// import { MdOutlineStar } from "react-icons/md";
// const Card = ({ item, checker }) => {
//   const watchlistData = useSelector(function (store) {
//     return store.watchlist;
//   });
//   const isPresent = (element, array) =>
//     array.some((obj) => JSON.stringify(obj) === JSON.stringify(element));

//   const starRenderingLogic = isPresent(item, watchlistData);

//   console.log(starRenderingLogic);

//   const dispatch = useDispatch();

//   function addCoin() {
//     dispatch(handleAddcoin(item));
//   }

//   function removeCoin() {
//     dispatch(handleremovecoin(item));
//   }

//   return (
//     <div className="w-full mt-5  bg-teal-50 border shadow-lg gap-5 rounded-md py-4 px-5 flex flex-col">
//       <div className="flex gap-4 items-center ">
//         <abbr className="w-1/6" title="Click here to know more.">
//           <Link to={`/coin/${item.id}`}>
//             {" "}
//             <img
//               src={checker === "top10" ? item.thumb : item.image}
//               alt="Crypto symbol"
//             />
//           </Link>
//         </abbr>
//         <div className="flex flex-col w-full">

//         {/* <abbr className="w-1/6" title="Click here to know more.">
//           <Link to={`/coin/${item.id}`}>
//             {" "} */}

//           <h2 className="text-[20px] font-bold">{item.name}</h2>
//            {/* </Link>
//            </abbr> */}

//           <h2 className="text-[18px] font-semibold text-gray-500">
//             {item.symbol}
//           </h2>
//         </div>
//         {!starRenderingLogic ? (
//           <MdOutlineStarRate onClick={addCoin} className="text-[50px] cursor-pointer" />
//         ) : (
//           <MdOutlineStar onClick={removeCoin} className="text-[50px] cursor-pointer" />
//         )}
//       </div>

//       <div className="flex items-center gap-4 ">
//         {checker !== "top10" && (
//           <h3 className="border px-2 py-1 text-[22px] rounded-3xl border-green-400 shadow-sm">
//             &#x24;{item.price_change_24h}
//           </h3>
//         )}
//         <div className="border p-2 rounded-full border-green-400 shadow-sm">
//           {checker === "top10" ? (
//             item.data.price_change_percentage_24h.usd > 0 ? (
//               <FaArrowTrendUp />
//             ) : (
//               <FaArrowTrendDown />
//             )
//           ) : item.ath_change_percentage > 0 ? (
//             <FaArrowTrendUp />
//           ) : (
//             <FaArrowTrendDown />
//           )}
//         </div>
//       </div>

//       <h3 className="text-[28px] font-bold text-green-500">
//         {" "}
//         &#x24;
//         {checker === "top10"
//           ? Math.round(item.data.price * 1000) / 1000
//           : Math.round(item.current_price * 1000) / 1000}
//       </h3>
//       <div>
//         <div>
//           Total Volume:{" "}
//           {checker === "top10" ? item.data.total_volume : item.total_volume}
//         </div>
//         <div>
//           Market capcity:
//           {checker === "top10" ? item.data.market_cap : item.market_cap}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAddcoin, handleremovecoin } from "../store/watchlistSlice";
import { MdOutlineStar } from "react-icons/md";

const Card = ({ item, checker }) => {
  const watchlistData = useSelector((store) => store.watchlist);
  const isPresent = (element, array) =>
    array.some((obj) => JSON.stringify(obj) === JSON.stringify(element));

  const starRenderingLogic = isPresent(item, watchlistData);
  const dispatch = useDispatch();

  function addCoin() {
    dispatch(handleAddcoin(item));
  }

  function removeCoin() {
    dispatch(handleremovecoin(item));
  }

  return (
    <div className="w-full bg-white flex justify-center py-10">
      <div className="w-full max-w-2xl bg-[#0d1117] border border-gray-700 shadow-lg shadow-cyan-500/30 rounded-xl p-6 flex flex-col text-gray-300">
        <div className="flex gap-4 items-center justify-between">
          <abbr className="flex justify-center items-center w-16 h-16" title="Click here to know more.">
            <Link to={`/coin/${item.id}`}>
              <img
                src={checker === "top10" ? item.thumb : item.image}
                alt="Crypto symbol"
                className="w-16 h-16 rounded-full shadow-md object-cover"
              />
            </Link>
          </abbr>
          <div className="flex flex-col flex-grow text-left">
            <h2 className="text-xl font-bold text-[#00FFEA]">{item.name}</h2>
            <h2 className="text-lg font-semibold text-gray-400 uppercase">{item.symbol}</h2>
          </div>
          {!starRenderingLogic ? (
            <MdOutlineStarRate onClick={addCoin} className="text-3xl cursor-pointer text-gray-500 hover:text-yellow-400 transition" />
          ) : (
            <MdOutlineStar onClick={removeCoin} className="text-3xl cursor-pointer text-yellow-400 transition" />
          )}
        </div>

        <div className="flex items-center gap-4 mt-4 justify-center">
          {checker !== "top10" && (
            <h3 className="border px-4 py-2 text-lg rounded-lg border-green-400 bg-[#1C2531] text-green-400 shadow-sm">
              &#x24;{item.price_change_24h}
            </h3>
          )}
          <div className="border p-3 rounded-full border-green-400 shadow-md bg-[#1C2531] text-green-400 flex items-center justify-center">
            {checker === "top10" ? (
              item.data.price_change_percentage_24h.usd > 0 ? (
                <FaArrowTrendUp />
              ) : (
                <FaArrowTrendDown />
              )
            ) : item.ath_change_percentage > 0 ? (
              <FaArrowTrendUp />
            ) : (
              <FaArrowTrendDown />
            )}
          </div>
        </div>

        <h3 className="text-3xl font-bold text-green-500 mt-4 text-center">
          &#x24;
          {checker === "top10"
            ? Math.round(item.data.price * 1000) / 1000
            : Math.round(item.current_price * 1000) / 1000}
        </h3>
        <div className="mt-2 text-gray-400 text-center">
          <div>
            <span className="text-gray-500">Total Volume:</span> {checker === "top10" ? item.data.total_volume : item.total_volume}
          </div>
          <div>
            <span className="text-gray-500">Market Capacity:</span> {checker === "top10" ? item.data.market_cap : item.market_cap}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
