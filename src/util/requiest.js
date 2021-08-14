import axios from "axios";
import { getToken } from "./auth";
// import { BASE_URL } from "./tools";
const instance = axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
});

//全局请求拦截
instance.interceptors.request.use(
  function(config) {
    //在请求拦截里面统一设置header头
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken(); //相当于令牌
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
//全局响应拦截
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export const get = (url, params) => instance.get(url, { params });

//封装post请求
export const post = (url, data) => instance.post(url, data);
//删除
export const dele = (url, params) => instance.delete(url, { params });
export const put = (url, params) => instance.put(url, { params });
export default instance;
