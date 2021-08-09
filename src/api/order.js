import { post, get } from "../util/requiest";
//生成订单
export const addorder = (data) => post("/api/v1/orders", data);

//获取订单
export const getOrders = () => get("/api/v1/orders");
