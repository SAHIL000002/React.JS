import React from "react";
function App() {
  return <User name="Sahil" age={21} />;
}

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}
export default App;
 