import React, { useState } from "react";
import { useLogin } from "../api/API";

function Login(props) {
  const [email, setEmail] = useState("a@b.c");
  const [pass, setPass] = useState("aaa");
  const login = useLogin();

  const loginUser = () => {
    login({ pass, email });
  };
  return (
    <div>
      <h1>Login</h1>
      email:
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      pass:
      <input value={pass} onChange={(e) => setPass(e.target.value)} />
      <br />
      <button onClick={loginUser}>login</button>
    </div>
  );
}
export default Login;
