export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    document.body.appendChild(dot);
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    const body = document.querySelector("body");
    body.style.overflowY = "hidden";

    const { clientX, clientY } = event;
    const handleDot = (client) => {
      let view = client === clientX ? window.innerWidth : window.innerHeight;
      if (client < 0) {
        return 0;
      } else if (client >= view) {
        return view - 20;
      } else if (client >= view - 20) {
        return client - 20;
      } else {
        return client;
      }
    };
    const dot = document.querySelector(".dot");
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.borderRadius = "20px";
    dot.style.backgroundColor = "blue";
    dot.style.position = "absolute";
    dot.style.left = `${handleDot(clientX)}px`;
    dot.style.top = `${handleDot(clientY)}px`;
    onBefore();
  };
};
