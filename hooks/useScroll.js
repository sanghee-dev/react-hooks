export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const style = {
    position: "fixed",
    color: `rgba(${255 - 255 * (state.y / window.innerHeight / 5)}, ${
      255 * (state.y / window.innerHeight / 5)
    }, ${255 * (state.y / window.innerHeight / 5)}, 1)`,
  };
  return { ...state, style };
};
