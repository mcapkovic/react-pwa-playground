import React from "react";

const APIStateContext = React.createContext();
const APIDispatchContext = React.createContext();

const initialState = {
  loading: false,
  message: "",
  error: null,
  user: null,
};

const loadingState={
  loading: true,
  message: "",
  error: null,
}

function apiReducer(state, action) {
  switch (action.type) {
    case "start-loading":
      return {...state, ...loadingState} ;
    case "update":
      return { ...state, ...action.payload };
    case "success":
      return { ...state, loading: false, error: null, message: action.message };
    case "error":
      return { ...state, loading: false, message: "", error: action.error };
    case "user":
      return {
        ...state,
        loading: false,
        error: null,
        message: action.message,
        user: action.user,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function APIProvider({ children }) {
  const [state, dispatch] = React.useReducer(apiReducer, initialState);
  // console.log(state)
  return (
    <APIStateContext.Provider value={state}>
      <APIDispatchContext.Provider value={dispatch}>
        {children}
      </APIDispatchContext.Provider>
    </APIStateContext.Provider>
  );
}

function useAPIState() {
  const context = React.useContext(APIStateContext);
  if (context === undefined) {
    throw new Error("useAPIState must be used within a APIProvider");
  }
  return context;
}

function useAPIDispatch() {
  const context = React.useContext(APIDispatchContext);
  if (context === undefined) {
    throw new Error("useAPIDispatch must be used within a APIProvider");
  }
  return context;
}

export { APIProvider, useAPIState, useAPIDispatch };
