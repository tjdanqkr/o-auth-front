import axios from "axios";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const api = async (url: string, method: Method, data: any) => {
  axios.defaults.baseURL = "http://192.168.0.12:8080";
  const res = await axios({ url, method, data });
  return res;
};
export const getRefresh = async (url: string) => {
  axios.defaults.baseURL = "http://192.168.0.12:8080";
  const res = await axios({
    url,
    method: "GET",
    headers: {
      Authorization: `jwt ${localStorage.getItem("token")}`,
    },
  });
  return res;
};
