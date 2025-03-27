import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/board/postSlice";
import communicationReducer from "./features/communications/communicationSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    communication: communicationReducer,
  },
});

export default store;
