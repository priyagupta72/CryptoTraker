// import React from "react";
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setuser } from "../store/userSlice";
// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   console.log(formData);

//   function handleChange(event) {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const data = await fetch("http://localhost:3001/api/v1/createuser", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const response = await data.json();

//     console.log(response);
//     if (response.status === false) {
//       toast.error(response.message, { duration: 3000 });
//     } else if (response.status) {
//       dispatch(setuser(response.message));
//       navigate("/trending");
//     }
//   }

//   return (
//     <>
//       <Toaster position="bottom-center" reverseOrder={false} />
//       <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
//         <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//           <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
//             <div className="mt-12 flex flex-col items-center">
//               <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
//               <div className="w-full flex-1 mt-8">
//                 <div className="my-12 border-b text-center"></div>
//                 <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
//                   <input
//                     className="w-full mb-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   <input
//                     className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   <input
//                     className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   <button
//                     type="submit"
//                     className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
//                   >
//                     <svg
//                       className="w-6 h-6 -ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                       <circle cx="8.5" cy={7} r={4} />
//                       <path d="M20 8v6M23 11h-6" />
//                     </svg>
//                     <span className="ml-3">Sign Up</span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
//             <div
//               className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
//               style={{
//                 backgroundImage:
//                   'url("https://storage.getblock.io/web/blog/article-covers/Blockchain+vs+Cryptocurrency+Differences.svg")',
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;



import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setuser } from "../store/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = await fetch("https://cryptotraker-3.onrender.com/api/v1/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const response = await data.json();
    if (response.status === false) {
      toast.error(response.message, { duration: 3000 });
    } else if (response.status) {
      dispatch(setuser(response.message));
      navigate("/trending");
    }
  }

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="min-h-screen bg-[#0d1117] text-gray-100 flex justify-center items-center">
        <div className="max-w-4xl w-full bg-[#151D27] shadow-lg rounded-xl flex overflow-hidden">
          
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-[#00FFEA] text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit} className="mt-8">
              <input
                className="w-full px-4 py-3 rounded-lg bg-[#1C2531] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-full mt-4 px-4 py-3 rounded-lg bg-[#1C2531] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="w-full mt-4 px-4 py-3 rounded-lg bg-[#1C2531] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="mt-6 w-full py-3 rounded-lg bg-black text-[#00FFEA] font-semibold transition-transform duration-300 transform hover:scale-105 shadow-md shadow-cyan-500/30"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:flex w-1/2 bg-cover bg-center" style={{
            // backgroundImage: 'url("https://storage.getblock.io/web/blog/article-covers/Blockchain+vs+Cryptocurrency+Differences.svg")'
            backgroundImage: 'url("https://images.unsplash.com/photo-1639454276085-9f55d2db6570?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
          }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
