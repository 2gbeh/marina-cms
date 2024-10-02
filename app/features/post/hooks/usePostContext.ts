import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { TUsers, TPosts, IPostLoader } from "../utils/post.interface";

export interface IPostReducerState {
  posts: TPosts;
  totalPosts: number;
  selectedPostId: string;
  users: TUsers;
  selectedUserId: number;
  showModal: boolean;
}

export interface IPostReducerAction {
  type: "constructor" | "setPostId" | "setUserId" | "openModal" | "closeModal";
  payload?: unknown;
}

export const initialPostReducerState = {
  posts: [],
  totalPosts: 0,
  selectedPostId: "",
  users: [],
  selectedUserId: -1,
  showModal: false,
};

export const postReducer = (
  state: IPostReducerState,
  action: IPostReducerAction,
): IPostReducerState => {
  switch (action.type) {
    case "constructor": {
      const payload = action.payload as IPostLoader;
      return {
        ...state,
        users: payload.users,
        posts: payload.posts,
        totalPosts: payload.posts.length,
      };
    }
    case "setPostId": {
      const payload = action.payload as string;
      return {
        ...state,
        selectedPostId: payload,
      };
    }
    case "setUserId": {
      const payload = action.payload as number;
      return {
        ...state,
        selectedUserId: payload,
      };
    }
    case "openModal": {
      return {
        ...state,
        showModal: true,
      };
    }
    case "closeModal": {
      return {
        ...state,
        selectedPostId: "",
        showModal: false,
      };
    }
    default:
      return state;
  }
};

export const PostContext = createContext<{
  state: IPostReducerState;
  dispatch: Dispatch<IPostReducerAction>;
}>({
  state: initialPostReducerState,
  dispatch: () => undefined,
});

export function usePostContext() {
  const { state, dispatch } = useContext(PostContext);

  return {
    ...state,
    constructor: (payload: IPostLoader) =>
      dispatch({ type: "constructor", payload }),
    setPostId: (payload: string) => dispatch({ type: "setPostId", payload }),
    setUserId: (payload: number) => dispatch({ type: "setUserId", payload }),
    openModal: () => dispatch({ type: "openModal" }),
    closeModal: () => dispatch({ type: "closeModal" }),
  };
}
