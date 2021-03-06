import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });
  return (
    <div className="container">
      <h1>Hello, useAxios!</h1>
      <h4>{data && data.status}</h4>
      <h4>{loading && "Loading"}</h4>
      <button onClick={refetch}>Click me!</button>
    </div>
  );
};

export default App;
