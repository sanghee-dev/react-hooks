export const useNotification = (
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
