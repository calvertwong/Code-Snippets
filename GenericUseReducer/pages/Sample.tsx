import { ActionType } from "../entities/ActionType";
import React, { Reducer, useReducer } from "react";

type PageState = {
  username: string;
  password: string;
  usernameError: object | null;
  passwordError: object | null;
};

// Typing for T, string | object | null in this example
type StatePropsTypes = PageState[keyof PageState];

const initialState: PageState = {
  username: "",
  password: "",
  usernameError: null,
  passwordError: null
};

const reducer = <T,>(state: PageState, action: ActionType<T>): PageState => {
  if (action.type === "reset") {
    return initialState;
  }

  return { ...state, [action.type]: action.value };
};
  
function Sample() {
  const [state, dispatch] = useReducer<Reducer<PageState, ActionType<StatePropsTypes>>>(reducer, initialState);
  
  // somewhere in a function
  dispatch({ type: "username", value: "some username value" });
  dispatch({ type: "password", value: "some password value" });
  dispatch({ type: "usernameError", value: {hasError: true, errorMsg: "Error message peeps"} });
  dispatch({ type: "passwordError", value: {hasError: true, errorMsg: "Error message peeps pep pep"} });
}
