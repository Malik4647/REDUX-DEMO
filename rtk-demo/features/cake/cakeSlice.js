const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 20,
};

const cakeSlice = createSlice({
  name: "Cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

// const createSlice = require("@reduxjs/toolkit").createSlice;

// const initialState = {
//   numOfCakes: 20,
// };

// const cakeSlice = createSlice({
//   name: "cake",
//   initialState,
//   reducers: {
//     ordered: (state) => {
//       state.numOfCakes--;
//     },
//     restocked: (state, action) => {
//       state.numOfCakes += action.payload;
//     },
//   },
// });

// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
