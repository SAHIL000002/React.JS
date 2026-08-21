import React, { useState } from "react";

function RegForm() {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const [uname, pass] = ["admin", "12345"];
  const [loginStatus, setLogin] = useState(false);
  const checkLogin = (e) => {
    e.prevenDefault();
    if (uname == username && pass == password) setLogin(true);
    else setLogin(false);
  };
  return (
    <form>
      <h1>{loginStatus ? "login Success" : "login failed"}</h1>
      <input
        placeholder="enter your username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder="enter your username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onKeyUp={checkLogin(e)}
      />
      <button onClick={(e) => checkLogin(e)} >LogIn</button>
    </form>
  );
}

export default RegForm;
