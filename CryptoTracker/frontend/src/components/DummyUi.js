// import React from "react";

// const DummyUi = () => {
//   return (
//     <section className="bg-white ">
//       <div className="container px-6 py-10 mx-auto animate-pulse">
//         <div className="w-48 h-2 mx-auto bg-gray-200 rounded-lg " />
//         <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg " />
//         <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 " />
//         <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//           <div className="w-full ">
//             <div className="w-full h-64 bg-gray-300 rounded-lg " />
//             <div className="w-56 h-2 mt-4 bg-gray-200 rounded-lg " />
//             <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg " />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DummyUi;



import React from "react";

const DummyUi = () => {
  return (
    <section className="bg-[#0d1117] min-h-screen flex justify-center items-center py-10">
      <div className="max-w-6xl w-full bg-[#151D27] shadow-lg rounded-xl p-8 flex flex-col text-gray-100 border border-gray-700">
        <div className="w-48 h-3 mx-auto bg-gray-700 rounded-lg" />
        <p className="w-64 h-3 mx-auto mt-4 bg-gray-700 rounded-lg" />
        <p className="w-64 h-3 mx-auto mt-4 bg-gray-700 rounded-lg sm:w-80" />
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full bg-[#1C2531] p-6 rounded-lg shadow-md shadow-cyan-500/30 border border-gray-600">
              <div className="w-full h-64 bg-gray-600 rounded-lg" />
              <div className="w-56 h-3 mt-4 bg-gray-500 rounded-lg" />
              <p className="w-24 h-3 mt-4 bg-gray-500 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DummyUi;