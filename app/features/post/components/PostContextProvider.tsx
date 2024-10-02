import React, { useReducer } from "react";
import {
  initialPostReducerState,
  postReducer,
  PostContext,
} from "../hooks/usePostContext";

function PostContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(postReducer, initialPostReducerState);
  console.log("🚀 ~ PostContextProvider");
  // renders
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
}

export default React.memo(PostContextProvider);
