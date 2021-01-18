import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>Hello, useState!</h1>
      <h4>현재 숫자는 {number}</h4>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
};

export default App;
