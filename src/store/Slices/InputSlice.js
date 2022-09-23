import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
};

const InputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    nameSetter: (state, action) => {
      state.name = action.payload;
    },
    ageSetter: (state, action) => {
      state.age = action.payload;
    },
    emailSetter: (state, action) => {
      state.email = action.payload;
    },
    phoneSetter: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const inputActions = InputSlice.actions;

export default InputSlice.reducer;
