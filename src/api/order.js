import { post, get, dele } from "../util/requiest";
//生成订单
export const addorder = (data) => post("/api/v1/orders", data);

//获取订单列表
export const getOrders = () => get("/api/v1/orders");
//获取订单详情
export const getOrderdetail = (id) => dele("/api/v1/orders/" + id);
