import { post, get } from "../util/requiest";

//二次封装注册接口
export const regApi = (user) => post("/api/v1/auth/reg", user);
//封装登陆接口
export const loginApi = (user) => post("/api/v1/auth/login", user);
//获取用户信息
export const userdata = () => get("/api/v1/users/info");
//修改密码
export const updatepassword = (params) =>
  post("/api/v1/users/change_pwd", params);
//修改个人信息
export const updateinfo = (params) => post("/api/v1/users/change_info", params);
