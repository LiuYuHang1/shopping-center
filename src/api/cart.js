import { get, post, dele } from "../util/requiest";

export const addToCart = (product, num = 1) =>
  post("/api/v1/shop_carts", {
    product,
    quantity: num,
  });
export const loadCartlist = () => get("/api/v1/shop_carts");

//删除购物车

export const delpro = (id) => dele("/api/v1/shop_carts/" + id);
//删除多个购车记录
export const delspro = (ids) =>
  post("/api/v1/shop_carts/delmany", {
    ids,
  });
