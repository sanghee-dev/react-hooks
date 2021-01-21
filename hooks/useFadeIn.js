export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      const fadeInStyle = {
        opacity: 1,
        transition: `opacity ${duration}s ease-in-out ${delay}s`,
      };
      Object.assign(current.style, fadeInStyle);
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};
