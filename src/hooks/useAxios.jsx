import { useState, useEffect } from "react";
import instancse from "../utils/axios";
import axios from "axios";

const useAxios = (url, axiosUrl) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    url
      .get(axiosUrl)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return [data];
};

export default useAxios;
