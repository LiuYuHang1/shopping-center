import { post, get, dele } from "../util/requiest";
//生成订单
export const addorder = (data) => post("/api/v1/orders", data);

//获取订单列表
export const getOrders = () => get("/api/v1/orders");
//删除单个订单详情
export const getOrderdetail = (id) => dele("/api/v1/orders/" + id);
//删除多个订单
export const delorders = (ids) => post("/api/v1/orders/delmany", { ids });
//根据id获取详情
export const getDetail = (id) => get("/api/v1/orders/" + id);
