import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const keepWorld = () => console.log("Keeping the world...");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, keepWorld);

  return (
    <div className="container">
      <h1>Hello, useConfirm!</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
