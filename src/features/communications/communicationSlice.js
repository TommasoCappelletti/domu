import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const communicationSlice = createSlice({
  name: "communication",
  initialState,
  reducers: {
    toggleReadCommunication(state, action) {},
  },
});

export const { toggleReadCommunication } = communicationSlice.actions;

export default communicationSlice.reducer;
