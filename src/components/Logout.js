import React from "react";
import { useLogout } from "../api/API";

function Logout(props) {
  const logout = useLogout();

  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      logout
    </button>
  );
}
export default Logout;
