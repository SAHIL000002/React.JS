import React, { useState } from "react";

function App() {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [checkup, setCheckup] = useState(false);
  const handleCheckup = () => {
    setCheckup(pass1 == pass2);
    console.log(pass1, pass2);
  };
  return (
    <div>
      <h1>Password Status {checkup ? "Matches" : "does not Matches"}</h1>
      <h2>{pass1 + " " + pass2}</h2>
      <input
        type="password"
        value={pass1}
        onChange={(e) => {
          setPass1(e.target.value);
        }}
        onKeyUp={() => {
          handleCheckup();
        }}
      />
      <input
        type="password"
        value={pass2}
        onChange={(e) => {
          setPass2(e.target.value);
        }}
        onKeyUp={() => {
          handleCheckup();
        }}
      />
    </div>
  );
}

export default App;
