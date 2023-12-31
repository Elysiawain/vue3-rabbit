import request from "@/utils/Request"

// 获取顶部分类导航
export const getCategoryAPI = () => {
    return request({
        url: "/home/category/head",
        method: "get"
    });
}


/**
 * 获取轮播图片数据
 * @returns 
 */
export const getBannerAPI = () => {
    return request({
        url: "/home/banner",
        method: "get"
    });
}
/**
 * 新鲜好物
 * @returns 
 */
export const getFindNewAPI = () => {
    return request({
        url: "/home/new",
        method: "get"
    });
}
/**
 * 热门好货
 * @returns 
 */
export const getFindHotAPI = () => {
    return request({
        url: "/home/hot",
        method: "get"
    });
}
/**
 * 获取商品列表
 * @returns 
 */
export const getProductAPI = () => {
    return request({
        url: "/home/goods",
        method: "get",
    });
}
