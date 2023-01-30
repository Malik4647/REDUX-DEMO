const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "Cake",
  initialState,
  reducer: {
    ordered: (state) => {
      state.numberOfCakes - 1;
    },
    restocked: (state, action) => {
      numberOfCakes = state.numberOfCakes + action.payload;
    },
  },
});

module.exports.cakeActions = cakeSlice.actions;
module.exports = cakeSlice.reducer;
