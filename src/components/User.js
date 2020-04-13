import React, { useEffect } from "react";
import { useGetUser } from "../api/API";
import { useAPIState } from "../api/API-context";
import Logout from "./Logout";

function User(props) {
  const getUser = useGetUser();
  const { user } = useAPIState();

  // const [user, setUser ] = useState(null);

  useEffect(() => {
    getUser();
    // getUser().then((response) =>
    //   saveUser({ type: "user", message: "user loaded", user: response })
    // );
  }, []);

  return (
    <div>
      user: {user && user.email} <Logout />
    </div>
  );
}
export default User;
