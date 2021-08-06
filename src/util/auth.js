import { TOKEN } from "./tools";
//判断是否登陆
export const isLogined = () => {
  if (localStorage.setItem("token")) {
    return true;
  }
};
//生成token
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
  console.log(TOKEN, token);
};
//获取token
export const getToken = () => {
  return localStorage.getItem("token") || "";
};
//移除token
export const removeToken = () => {
  return localStorage.removeItem("token");
};
