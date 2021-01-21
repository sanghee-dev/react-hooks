import React, { useState, useEffect } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We are online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="container">
      <h1>Hello, useNetwork!</h1>
      <h4>{onLine ? "Online" : "Offline"}</h4>
    </div>
  );
};

export default App;
