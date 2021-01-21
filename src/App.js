import React, { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
    runCb(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="container">
      <div
        ref={element}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Hello, useFullscreen!</h1>
        <img
          src="https://item.kakaocdn.net/do/7f552a5d038cc7b0b6f99339bbc330baf43ad912ad8dd55b04db6a64cddaf76d"
          style={{ width: window.innerHeight / 2 }}
          alt="React"
        />
        <button onClick={triggerFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
    </div>
  );
};

export default App;
