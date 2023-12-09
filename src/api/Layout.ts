import request from "@/utils/request";

// 获取顶部分类导航
export const getCategoryAPI = () => {
    return request({
        url: "/home/category/head",
        method: "get"
    });
}

// 获取轮播图片数据
export const getBannerAPI = () => {
    return request({
        url: "/home/banner",
        method: "get"
    });
}