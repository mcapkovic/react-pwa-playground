import React, { useState } from "react";
import {useRegister } from '../api/API';

function Register(props) {
  const [email, setEmail] = useState(`${Math.floor(Math.random() * 1000)}@email.com`);
  const [pass, setPass] = useState("1234");
  const register = useRegister();

  const registerUser = () => {
    // props.register({pass, email});
    register({pass, email})
  };
  return (
    <div>
      <h1>register</h1>
      email:
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      pass:
      <input value={pass} onChange={e => setPass(e.target.value)} />
      <br />
      <button onClick={registerUser}>register</button>
    </div>
  );
}
export default Register;
