import request from "@/utils/request";

// 获取顶部分类导航
export const getCategoryAPI = () => {
    return request({
        url: "/home/category/head",
        method: "get"
    });
}