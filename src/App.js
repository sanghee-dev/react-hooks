import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEvent("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("😀");
  const title = useClick(sayHello);
  return (
    <div className="container">
      <h1>Hello, useClick!</h1>
      <h4 ref={title}>😀</h4>
      <h4>Click me!</h4>
    </div>
  );
};

export default App;
