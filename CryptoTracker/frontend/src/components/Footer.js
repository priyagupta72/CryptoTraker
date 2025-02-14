// import React from "react";
// import { Link } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className=" border rounded-xl  shadow-lg w-full ">
//       <div className="flex justify-between px-4 items-center ">
//         <Link to={"/"}>
//           {" "}
//           <h1 className="cursor-pointer text-[30px] font-extrabold">
//             Crypto<span className="text-green-500">Tracker</span>
//           </h1>
//         </Link>

//         <div className="flex gap-1 ">
//           <FaWhatsapp className="text-green-700 cursor-pointer" />
//           <FaFacebook className="text-blue-700 cursor-pointer" />
//           <FaGithub className="text-black cursor-pointer" />
//           <FaYoutube className="text-red-700 cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#151D27] border-t border-gray-700 shadow-lg shadow-cyan-500/30 rounded-xl p-4 mt-10">
      <div className="flex justify-between px-4 items-center">
        <Link to="/">
          <h1 className="cursor-pointer text-[30px] font-extrabold text-gray-100">
            Crypto<span className="text-[#00FFEA]">Tracker</span>
          </h1>
        </Link>

        <div className="flex gap-4">
          <FaWhatsapp className="text-[#25D366] cursor-pointer text-xl hover:scale-110 transition-transform" />
          <FaFacebook className="text-[#1877F2] cursor-pointer text-xl hover:scale-110 transition-transform" />
          <FaGithub className="text-gray-100 cursor-pointer text-xl hover:scale-110 transition-transform" />
          <FaYoutube className="text-[#FF0000] cursor-pointer text-xl hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default Footer;