import Backendless from "backendless";
import { useAPIDispatch } from "./API-context";

const APP_ID = "8EBB991D-E42E-1E48-FF24-20C8179C7100";
const API_KEY = "2B788E19-33F5-4A25-BB0C-5BC213B08BAE";
Backendless.serverURL = "https://api.backendless.com";
Backendless.initApp(APP_ID, API_KEY);

export function useRegister() {
  const dispatch = useAPIDispatch();
  // const context = React.useContext(APIDispatchContext);

  return (data) => {
    dispatch({ type: "start-loading" });

    const onSuccess = (user) => {
      console.log("User has been registered:\n", user);
      // this.setState({ message: "User saved", loading: false });

      dispatch({ type: "success", message: "User saved" });
    };

    const onError = (error) => {
      // console.error("Server reported an error: ", error.message);
      // console.error("error code: ", error.code);
      // console.error("http status: ", error.status);
      dispatch({ type: "error", error: error.message });
    };

    const user = new Backendless.User();
    user.email = data.email;
    user.password = data.pass;
    user.name = "Green Goblin";
    user.phoneNumber = "212-555-1212";

    Backendless.UserService.register(user).then(onSuccess).catch(onError);
  };
}

export function useSaveData() {
  const dispatch = useAPIDispatch();
  return (data) => {
    dispatch({ type: "start-loading" });

    Backendless.Data.of("TestTable")
      .save(data)
      .then((obj) => {
        const message =
          "Check 'TestTable' in Backendless Console." +
          `ObjectId = ${obj.objectId}`;

        dispatch({ type: "success", message });
      })
      .catch((error) => dispatch({ type: "error", error: error.message }));
  };
}

export function useLogin() {
  const dispatch = useAPIDispatch();

  return (data) => {
    dispatch({ type: "start-loading" });

    const onSuccess = (user) => {
      console.log("user has logged in");
      console.log(user);
      dispatch({
        type: "user",
        message: "user has logged in",
        user,
      });
    };

    const onError = (error) => {
      console.log("error message - " + error.message);
      console.log("error code - " + error.statusCode);
      dispatch({ type: "error", error: error.message });
    };

    Backendless.UserService.login(data.email, data.pass, true)
      .then(onSuccess)
      .catch(onError);
  };
}

export function useLogout() {
  const dispatch = useAPIDispatch();

  return () => {
    const onSuccess = () => {
      dispatch({
        type: "user",
        message: "user has logged out",
        user: null,
      });
    };

    const onError = (error) => {
      console.log("error message - " + error.message);
      console.log("error code - " + error.statusCode);
      dispatch({ type: "error", error: error.message });
    };

    Backendless.UserService.logout().then(onSuccess).catch(onError);
  };
}

export function useGetUser() {
  const dispatch = useAPIDispatch();

  return () => {
    const onSuccess = (currentUser) => {
      dispatch({
        type: "user",
        message: "user loaded",
        user: currentUser,
      });
    };

    const onError = (error) => {
      console.log("error message - " + error.message);
      console.log("error code - " + error.statusCode);
      dispatch({ type: "error", error: error.message });
    };

    Backendless.UserService.getCurrentUser().then(onSuccess).catch(onError);
  };
}

export function useGetNotes() {
  const dispatch = useAPIDispatch();

  return () => {
    dispatch({ type: "start-loading" });

    const onSuccess = (data) => {
      dispatch({
        type: "success",
        message: "data loaded",
      });
      return data
    };

    const onError = (error) => {
      console.log("error message - " + error.message);
      console.log("error code - " + error.statusCode);
      dispatch({ type: "error", error: error.message });
    };

    const queryBuilder = Backendless.DataQueryBuilder.create().setPageSize( 50 );

    return Backendless.Data.of("TestTable")
    .find( queryBuilder )
      .then( onSuccess)
      .catch( (error) => null);
  };
}
