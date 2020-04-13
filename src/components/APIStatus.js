import React from "react";
import reactLogo from "../react-logo.svg";
import backendlessLogo from "../backendless-logo.svg";
import {useAPIState} from "../api/API-context";

function APIStatus() {
  const { loading, message, error } = useAPIState();
//   const aaaa = useAPIState();

// console.log(aaaa)
  return (
    <div className="App-header">
      <img src={reactLogo} className="react-logo" alt="logo" />
      <img src={backendlessLogo} className="backendless-logo" alt="logo" />
      {/* <h2>Welcome to Backendless with React</h2> */}
      <h2>{loading ? "Loading..." : message || error} </h2>
    </div>
  );
}

export default APIStatus;
