import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    inceaseByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const actions = CounterSlice.actions;

export default CounterSlice.reducer;
