import Axios from "axios";
import AxiosMiddleware from "@/helpers/axiosMiddleware.helpers";

window.localBaseURL = "http://localhost:5000";

const config = {
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
  baseURL: window.localBaseURL,
};

const axios = Axios.create(config);

axios.interceptors.request.use(
  AxiosMiddleware.requestFulfilled,
  AxiosMiddleware.requestRejected
);
axios.interceptors.response.use(
  AxiosMiddleware.responseFulfilled,
  AxiosMiddleware.responseRejected
);

export default axios;
