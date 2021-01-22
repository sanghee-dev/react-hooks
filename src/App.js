import React from "react";

const useNotification = (
  title = "",
  options = {
    body: "",
  }
) => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const trigerNotif = useNotification("Hello", {
    body: "Hello, useNotification!",
  });
  return (
    <div className="container">
      <h1>Hello, useNotification!</h1>
      <button onClick={trigerNotif}>Click me!</button>
    </div>
  );
};

export default App;
