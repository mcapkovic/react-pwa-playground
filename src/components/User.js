import React, { useEffect } from "react";
import { useGetUser } from "../api/API";
import { useAPIState } from "../api/API-context";
import Logout from "./Logout";

function User(props) {
  const getUser = useGetUser();
  const { user } = useAPIState();

  const email = (user && user.email) || "not logged";

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      logged user: {email} <Logout />
    </div>
  );
}
export default User;
