import { get } from "../util/requiest";
//获取分类
export const getmenust = () => get("/api/v1/product_categories");
