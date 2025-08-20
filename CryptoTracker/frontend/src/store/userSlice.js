// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: "",
//   reducers: {
//     setuser(state, action) {
//       return action.payload;
//     },

//     removeuser(state, action) {
//       return "";
//     },
//   },
// });

// export const { setuser, removeuser } = userSlice.actions;
// export default userSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    removeuser: (state) => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { setuser, removeuser } = userSlice.actions;
export default userSlice.reducer;
