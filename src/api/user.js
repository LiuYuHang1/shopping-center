import { post } from "../util/requiest";

//二次封装注册接口
export const regApi = (user) => post("/api/v1/auth/reg", user);
//封装登陆接口
export const loginApi = (user) => post("/api/v1/auth/login", user);
